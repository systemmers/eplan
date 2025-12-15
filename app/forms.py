"""
Form Definitions
WTForms 폼 클래스 정의
"""
from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired, Email, Length


class ConsultingForm(FlaskForm):
    """기업교육 상담 문의 폼"""
    company_name = StringField('회사명', validators=[DataRequired(), Length(1, 200)])
    name = StringField('담당자 이름', validators=[DataRequired(), Length(1, 100)])
    email = StringField('이메일', validators=[DataRequired(), Email()])
    phone = StringField('전화번호', validators=[DataRequired(), Length(1, 20)])
    interested_courses = StringField('관심 프로그램')
    message = TextAreaField('기타 요청사항')


class InstructorApplicationForm(FlaskForm):
    """강사 지원 폼"""
    name = StringField('이름', validators=[DataRequired(), Length(1, 100)])
    email = StringField('이메일', validators=[DataRequired(), Email()])
    phone = StringField('전화번호', validators=[DataRequired(), Length(1, 20)])
    education = TextAreaField('학력', validators=[DataRequired()])
    experience = TextAreaField('교육 경력', validators=[DataRequired()])
    certificates = TextAreaField('보유 자격증')
    motivation = TextAreaField('지원 동기', validators=[DataRequired()])
