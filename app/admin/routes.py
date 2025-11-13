from flask import render_template, redirect, url_for, flash, request, current_app
from flask_login import login_required, current_user
from app import db
from app.models import Post, Category
from app.forms import PostForm
from . import admin


@admin.route('/')
@login_required
def dashboard():
    total_posts = Post.query.count()
    categories = Category.query.all()
    recent_posts = Post.query.order_by(Post.created_at.desc()).limit(10).all()
    
    category_stats = {}
    for cat in categories:
        category_stats[cat.name] = Post.query.filter_by(category_id=cat.id).count()
    
    return render_template('admin/dashboard.html',
                         total_posts=total_posts,
                         category_stats=category_stats,
                         recent_posts=recent_posts)


@admin.route('/posts')
@login_required
def posts():
    page = request.args.get('page', 1, type=int)
    pagination = Post.query.order_by(Post.created_at.desc())\
        .paginate(page=page, per_page=current_app.config['POSTS_PER_PAGE'], error_out=False)
    posts = pagination.items
    return render_template('admin/posts.html', posts=posts, pagination=pagination)


@admin.route('/posts/new', methods=['GET', 'POST'])
@login_required
def new_post():
    form = PostForm()
    form.category_id.choices = [(c.id, c.name) for c in Category.query.all()]
    
    if form.validate_on_submit():
        post = Post(
            title=form.title.data,
            content=form.content.data,
            category_id=form.category_id.data,
            author_id=current_user.id,
            is_published=form.is_published.data
        )
        db.session.add(post)
        db.session.commit()
        flash('게시글이 작성되었습니다.', 'success')
        return redirect(url_for('admin.posts'))
    
    return render_template('admin/post_form.html', form=form, title='새 게시글 작성')


@admin.route('/posts/<int:post_id>/edit', methods=['GET', 'POST'])
@login_required
def edit_post(post_id):
    post = Post.query.get_or_404(post_id)
    form = PostForm(obj=post)
    form.category_id.choices = [(c.id, c.name) for c in Category.query.all()]
    
    if form.validate_on_submit():
        post.title = form.title.data
        post.content = form.content.data
        post.category_id = form.category_id.data
        post.is_published = form.is_published.data
        db.session.commit()
        flash('게시글이 수정되었습니다.', 'success')
        return redirect(url_for('admin.posts'))
    
    return render_template('admin/post_form.html', form=form, post=post, title='게시글 수정')


@admin.route('/posts/<int:post_id>/delete', methods=['POST'])
@login_required
def delete_post(post_id):
    post = Post.query.get_or_404(post_id)
    db.session.delete(post)
    db.session.commit()
    flash('게시글이 삭제되었습니다.', 'success')
    return redirect(url_for('admin.posts'))

