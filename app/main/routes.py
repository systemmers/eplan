from flask import render_template, request, current_app, flash, redirect, url_for
from . import main


@main.route('/')
def index():
    from app.models import Post, Category
    
    # 각 카테고리별 게시글 수 조회
    notice_count = Post.query.join(Category).filter(
        Category.slug == 'notice',
        Post.is_published == True
    ).count()
    
    news_count = Post.query.join(Category).filter(
        Category.slug == 'news',
        Post.is_published == True
    ).count()
    
    english_count = Post.query.join(Category).filter(
        Category.slug == 'english',
        Post.is_published == True
    ).count()
    
    japanese_count = Post.query.join(Category).filter(
        Category.slug == 'japanese',
        Post.is_published == True
    ).count()
    
    chinese_count = Post.query.join(Category).filter(
        Category.slug == 'chinese',
        Post.is_published == True
    ).count()
    
    return render_template('index.html',
        notice_count=notice_count,
        news_count=news_count,
        english_count=english_count,
        japanese_count=japanese_count,
        chinese_count=chinese_count
    )


@main.route('/company')
def company():
    return render_template('company/index.html')


@main.route('/phone-english')
def phone_english():
    return render_template('phone_english/index.html')


@main.route('/phone-english/<curriculum>')
def phone_english_detail(curriculum):
    """전화영어 커리큘럼 상세 페이지"""
    valid_curriculums = ['general-conversation', 'business-conversation', 'discussion', 'test-prep']
    if curriculum not in valid_curriculums:
        from flask import abort
        abort(404)
    return render_template(f'phone_english/{curriculum}.html')


@main.route('/corporate-programs')
def corporate_programs():
    return render_template('corporate/index.html')


@main.route('/corporate-programs/<program>')
def corporate_program_detail(program):
    """기업출강 프로그램 상세 페이지"""
    valid_programs = ['in-house', 'intensive', 'executive', 'resident', 'blended', 'oct']
    if program not in valid_programs:
        from flask import abort
        abort(404)
    return render_template(f'corporate/{program}.html')


@main.route('/writing-correction')
def writing_correction():
    return render_template('writing/index.html')


@main.route('/consulting', methods=['GET', 'POST'])
def consulting():
    from app.forms import ConsultingForm
    from app.models import ConsultingInquiry
    from app import db
    
    form = ConsultingForm()
    if form.validate_on_submit():
        inquiry = ConsultingInquiry(
            company_name=form.company_name.data,
            name=form.name.data,
            email=form.email.data,
            phone=form.phone.data,
            interested_courses=form.interested_courses.data,
            message=form.message.data
        )
        db.session.add(inquiry)
        db.session.commit()
        flash('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.', 'success')
        return redirect(url_for('main.consulting'))
    
    return render_template('consulting/index.html', form=form)


@main.route('/for-instructors', methods=['GET', 'POST'])
def for_instructors():
    from app.forms import InstructorApplicationForm
    from app.models import InstructorApplication
    from app import db
    
    form = InstructorApplicationForm()
    if form.validate_on_submit():
        application = InstructorApplication(
            name=form.name.data,
            email=form.email.data,
            phone=form.phone.data,
            education=form.education.data,
            experience=form.experience.data,
            certificates=form.certificates.data,
            motivation=form.motivation.data
        )
        db.session.add(application)
        db.session.commit()
        flash('지원서가 제출되었습니다. 검토 후 연락드리겠습니다.', 'success')
        return redirect(url_for('main.for_instructors'))
    
    return render_template('instructors/index.html', form=form)


@main.route('/board/<category>')
def board_list(category):
    from app.models import Category, Post
    
    cat = Category.query.filter_by(slug=category).first_or_404()
    page = request.args.get('page', 1, type=int)
    
    pagination = Post.query.filter_by(category_id=cat.id, is_published=True)\
        .order_by(Post.created_at.desc())\
        .paginate(page=page, per_page=current_app.config['POSTS_PER_PAGE'], error_out=False)
    
    posts = pagination.items
    
    return render_template('board/list.html', 
                         category=cat, 
                         posts=posts, 
                         pagination=pagination)


@main.route('/board/<category>/<int:post_id>')
def board_detail(category, post_id):
    from app.models import Category, Post
    from app import db
    
    cat = Category.query.filter_by(slug=category).first_or_404()
    post = Post.query.filter_by(id=post_id, category_id=cat.id).first_or_404()
    
    # 조회수 증가
    post.views += 1
    db.session.commit()
    
    # 이전글/다음글
    prev_post = Post.query.filter(
        Post.category_id == cat.id,
        Post.id < post_id,
        Post.is_published == True
    ).order_by(Post.id.desc()).first()
    
    next_post = Post.query.filter(
        Post.category_id == cat.id,
        Post.id > post_id,
        Post.is_published == True
    ).order_by(Post.id.asc()).first()
    
    return render_template('board/detail.html', 
                         category=cat, 
                         post=post,
                         prev_post=prev_post,
                         next_post=next_post)

