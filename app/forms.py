from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, SubmitField, TextAreaField, SelectField
from wtforms.validators import DataRequired, Email, Length, ValidationError
from app.models import User


class LoginForm(FlaskForm):
    username = StringField('사용자명', validators=[DataRequired(), Length(1, 80)])
    password = PasswordField('비밀번호', validators=[DataRequired()])
    remember_me = BooleanField('로그인 상태 유지')
    submit = SubmitField('로그인')


class PostForm(FlaskForm):
    title = StringField('제목', validators=[DataRequired(), Length(1, 200)])
    content = TextAreaField('내용', validators=[DataRequired()])
    category_id = SelectField('카테고리', coerce=int, validators=[DataRequired()])
    is_published = BooleanField('게시', default=True)
    submit = SubmitField('저장')


class ConsultingForm(FlaskForm):
    company_name = StringField('회사명', validators=[DataRequired(), Length(1, 200)])
    name = StringField('담당자 이름', validators=[DataRequired(), Length(1, 100)])
    email = StringField('이메일', validators=[DataRequired(), Email()])
    phone = StringField('전화번호', validators=[DataRequired(), Length(1, 20)])
    interested_courses = StringField('관심 프로그램')
    message = TextAreaField('기타 요청사항')
    submit = SubmitField('문의 접수')


class InstructorApplicationForm(FlaskForm):
    name = StringField('이름', validators=[DataRequired(), Length(1, 100)])
    email = StringField('이메일', validators=[DataRequired(), Email()])
    phone = StringField('전화번호', validators=[DataRequired(), Length(1, 20)])
    education = TextAreaField('학력', validators=[DataRequired()])
    experience = TextAreaField('교육 경력', validators=[DataRequired()])
    certificates = TextAreaField('보유 자격증')
    motivation = TextAreaField('지원 동기', validators=[DataRequired()])
    submit = SubmitField('지원서 제출')

