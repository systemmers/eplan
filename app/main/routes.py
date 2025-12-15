"""
Main Routes
공개 페이지 라우트 정의
"""
from flask import render_template, request, current_app, flash, redirect, url_for
from flask_mail import Message
from . import main


@main.route('/')
def index():
    return render_template('index.html')


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


@main.route('/phone-english/curriculum-roadmap')
def curriculum_roadmap():
    """전화영어 커리큘럼 로드맵 페이지"""
    return render_template('phone_english/curriculum-roadmap.html')


@main.route('/phone-english/curriculum-roadmap/demo')
def curriculum_roadmap_demo():
    """전화영어 커리큘럼 로드맵 스타일 데모 페이지"""
    return render_template('demo/curriculum-roadmap-demo.html')


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


@main.route('/corporate-programs/demo')
def corporate_demo():
    """기업출강 패턴 데모 페이지"""
    return render_template('demo/corporate_demo.html')


@main.route('/phone-english/demo')
def phone_english_demo():
    """전화영어 패턴 데모 페이지"""
    return render_template('demo/phone_english_demo.html')


@main.route('/writing-correction')
def writing_correction():
    return render_template('writing/index.html')


@main.route('/consulting', methods=['GET', 'POST'])
def consulting():
    from app.forms import ConsultingForm
    from app import mail

    form = ConsultingForm()
    if form.validate_on_submit():
        # 이메일 전송
        try:
            msg = Message(
                subject=f'[ePlan] 기업교육 상담 문의 - {form.company_name.data}',
                recipients=[current_app.config['MAIL_RECIPIENT']],
                reply_to=form.email.data
            )
            msg.body = f"""
기업교육 상담 문의가 접수되었습니다.

=== 문의 정보 ===
회사명: {form.company_name.data}
담당자: {form.name.data}
이메일: {form.email.data}
연락처: {form.phone.data}
관심 프로그램: {form.interested_courses.data or '미선택'}

=== 기타 요청사항 ===
{form.message.data or '없음'}
"""
            mail.send(msg)
            flash('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.', 'success')
        except Exception as e:
            current_app.logger.error(f'이메일 전송 실패: {e}')
            flash('문의 접수 중 오류가 발생했습니다. 전화로 문의해 주세요.', 'error')

        return redirect(url_for('main.consulting'))

    return render_template('consulting/index.html', form=form)


@main.route('/for-instructors', methods=['GET', 'POST'])
def for_instructors():
    from app.forms import InstructorApplicationForm
    from app import mail

    form = InstructorApplicationForm()
    if form.validate_on_submit():
        # 이메일 전송
        try:
            msg = Message(
                subject=f'[ePlan] 강사 지원 - {form.name.data}',
                recipients=[current_app.config['MAIL_RECIPIENT']],
                reply_to=form.email.data
            )
            msg.body = f"""
강사 지원서가 접수되었습니다.

=== 지원자 정보 ===
이름: {form.name.data}
이메일: {form.email.data}
연락처: {form.phone.data}

=== 학력 ===
{form.education.data}

=== 교육 경력 ===
{form.experience.data}

=== 보유 자격증 ===
{form.certificates.data or '없음'}

=== 지원 동기 ===
{form.motivation.data}
"""
            mail.send(msg)
            flash('지원서가 제출되었습니다. 검토 후 연락드리겠습니다.', 'success')
        except Exception as e:
            current_app.logger.error(f'이메일 전송 실패: {e}')
            flash('지원서 제출 중 오류가 발생했습니다. 전화로 문의해 주세요.', 'error')

        return redirect(url_for('main.for_instructors'))

    return render_template('instructors/index.html', form=form)


@main.route('/for-instructors/demo')
def instructors_demo():
    """강사 채용 패턴 데모 페이지"""
    return render_template('demo/instructors_demo.html')


@main.route('/consulting/demo')
def consulting_demo():
    """컨설팅 문의 패턴 데모 페이지"""
    return render_template('demo/consulting_demo.html')


@main.route('/writing-correction/demo')
def writing_demo():
    """Writing 첨삭 패턴 데모 페이지"""
    return render_template('demo/writing_demo.html')
