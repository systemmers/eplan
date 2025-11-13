# eplan 컴포넌트 의존성 맵

생성일: 2025-01-26

## 1. 전체 의존성 그래프

```
run.py
  │
  └── app/__init__.py (create_app)
      │
      ├── config.py
      │   └── os (환경변수)
      │
      ├── Flask
      ├── SQLAlchemy (db)
      ├── LoginManager (login_manager)
      └── Migrate (migrate)
      │
      ├── app/models.py
      │   ├── db (SQLAlchemy)
      │   ├── login_manager (Flask-Login)
      │   ├── datetime
      │   └── werkzeug.security
      │
      ├── app/forms.py
      │   ├── FlaskForm (flask_wtf)
      │   ├── WTForms 필드
      │   └── app.models.User
      │
      ├── app/main/
      │   ├── __init__.py
      │   │   └── Blueprint
      │   └── routes.py
      │       ├── Flask (render_template, request, current_app, flash, redirect, url_for, abort)
      │       ├── app.models (Post, Category, ConsultingInquiry, InstructorApplication)
      │       ├── app.forms (ConsultingForm, InstructorApplicationForm)
      │       └── app (db)
      │
      ├── app/auth/
      │   ├── __init__.py
      │   │   └── Blueprint
      │   └── routes.py
      │       ├── Flask (render_template, redirect, url_for, flash, request)
      │       ├── Flask-Login (login_user, logout_user, current_user)
      │       ├── app.models (User)
      │       ├── app.forms (LoginForm)
      │       └── app (db)
      │
      └── app/admin/
          ├── __init__.py
          │   └── Blueprint
          └── routes.py
              ├── Flask (render_template, redirect, url_for, flash, request, current_app)
              ├── Flask-Login (login_required, current_user)
              ├── app.models (Post, Category)
              ├── app.forms (PostForm)
              └── app (db)
```

## 2. 모듈별 의존성 상세

### 2.1 app/__init__.py

**의존성**:
- `flask.Flask`
- `flask_sqlalchemy.SQLAlchemy` (db)
- `flask_login.LoginManager` (login_manager)
- `flask_migrate.Migrate` (migrate)
- `config.config`

**제공**:
- `db`: SQLAlchemy 인스턴스
- `login_manager`: LoginManager 인스턴스
- `migrate`: Migrate 인스턴스
- `create_app()`: 애플리케이션 팩토리 함수

**사용처**:
- `run.py`
- `app/models.py`
- `app/main/routes.py`
- `app/auth/routes.py`
- `app/admin/routes.py`
- `init_db.py`

### 2.2 app/models.py

**의존성**:
- `datetime.datetime`
- `werkzeug.security.generate_password_hash`
- `werkzeug.security.check_password_hash`
- `flask_login.UserMixin`
- `app.db`
- `app.login_manager`

**제공**:
- `User`: 사용자 모델
- `Category`: 카테고리 모델
- `Post`: 게시글 모델
- `ConsultingInquiry`: 컨설팅 문의 모델
- `InstructorApplication`: 강사 지원 모델
- `load_user()`: 사용자 로더 함수

**사용처**:
- `app/forms.py`
- `app/main/routes.py`
- `app/auth/routes.py`
- `app/admin/routes.py`
- `init_db.py`

### 2.3 app/forms.py

**의존성**:
- `flask_wtf.FlaskForm`
- `wtforms` 필드 및 검증기
- `app.models.User`

**제공**:
- `LoginForm`: 로그인 폼
- `PostForm`: 게시글 폼
- `ConsultingForm`: 컨설팅 문의 폼
- `InstructorApplicationForm`: 강사 지원 폼

**사용처**:
- `app/main/routes.py`
- `app/auth/routes.py`
- `app/admin/routes.py`

### 2.4 app/main/routes.py

**의존성**:
- `flask.render_template`
- `flask.request`
- `flask.current_app`
- `flask.flash` (간접)
- `flask.redirect` (간접)
- `flask.url_for` (간접)
- `flask.abort` (간접)
- `app.models.Post`
- `app.models.Category`
- `app.models.ConsultingInquiry`
- `app.models.InstructorApplication`
- `app.forms.ConsultingForm`
- `app.forms.InstructorApplicationForm`
- `app.db`
- `app.main.main` (Blueprint)

**제공**:
- 공개 페이지 라우트 핸들러

**사용하는 모델**:
- `Post`: 게시글 조회, 생성
- `Category`: 카테고리 조회
- `ConsultingInquiry`: 컨설팅 문의 생성
- `InstructorApplication`: 강사 지원 생성

### 2.5 app/auth/routes.py

**의존성**:
- `flask.render_template`
- `flask.redirect`
- `flask.url_for`
- `flask.flash`
- `flask.request`
- `flask_login.login_user`
- `flask_login.logout_user`
- `flask_login.current_user`
- `app.db`
- `app.models.User`
- `app.forms.LoginForm`
- `app.auth.auth` (Blueprint)

**제공**:
- 인증 관련 라우트 핸들러

**사용하는 모델**:
- `User`: 사용자 인증

### 2.6 app/admin/routes.py

**의존성**:
- `flask.render_template`
- `flask.redirect`
- `flask.url_for`
- `flask.flash`
- `flask.request`
- `flask.current_app`
- `flask_login.login_required`
- `flask_login.current_user`
- `app.db`
- `app.models.Post`
- `app.models.Category`
- `app.forms.PostForm`
- `app.admin.admin` (Blueprint)

**제공**:
- 관리자 기능 라우트 핸들러

**사용하는 모델**:
- `Post`: 게시글 CRUD
- `Category`: 카테고리 조회

## 3. 외부 라이브러리 의존성

### 3.1 Flask 생태계

```
Flask==3.0.0
├── Flask-SQLAlchemy==3.1.1
│   └── SQLAlchemy
├── Flask-Login==0.6.3
│   └── Flask
├── Flask-WTF==1.2.1
│   ├── WTForms==3.1.1
│   └── Flask
└── Flask-Migrate==4.0.5
    ├── Alembic
    └── Flask
```

### 3.2 기타 의존성

```
Werkzeug==3.0.1          # WSGI 유틸리티, 비밀번호 해싱
email-validator==2.1.0   # 이메일 검증
python-dotenv==1.0.0     # 환경변수 관리
```

## 4. 템플릿 의존성

### 4.1 템플릿 상속 구조

```
base.html
├── Flask (url_for)
├── Flask-Login (current_user)
├── HTMX (htmx.org)
├── static/css/main.css
├── static/js/main.js
├── static/js/modal.js
├── static/js/accordion.js
└── static/js/slider.js
    │
    └── 모든 페이지 템플릿
        ├── extends "base.html"
        └── block content
```

### 4.2 템플릿 변수 의존성

**base.html**:
- `current_user` (Flask-Login)
- `url_for()` (Flask)

**index.html**:
- `notice_count`
- `news_count`
- `english_count`
- `japanese_count`
- `chinese_count`

**board/list.html**:
- `category`
- `posts`
- `pagination`

**board/detail.html**:
- `category`
- `post`
- `prev_post`
- `next_post`

**admin/dashboard.html**:
- `total_posts`
- `category_stats`
- `recent_posts`

**admin/posts.html**:
- `posts`
- `pagination`

**admin/post_form.html**:
- `form`
- `post` (수정 시)
- `title`

**auth/login.html**:
- `form`

**consulting/index.html**:
- `form`

**instructors/index.html**:
- `form`

## 5. 데이터베이스 의존성

### 5.1 모델 간 관계

```
User
  └── posts (relationship) → Post
      └── author (backref) → User

Category
  └── posts (relationship) → Post
      └── category (backref) → Category

Post
  ├── category_id (FK) → Category.id
  └── author_id (FK) → User.id
```

### 5.2 쿼리 의존성

**Post 쿼리**:
- `Category` 조인 필요
- `User` 조인 필요 (author 정보)

**Category 쿼리**:
- 독립적 (FK 없음)

**User 쿼리**:
- 독립적 (FK 없음)

## 6. 순환 참조 방지 패턴

### 6.1 지연 임포트 (Lazy Import)

**패턴**:
```python
# app/main/routes.py
from flask import render_template
from . import main

@main.route('/')
def index():
    from app.models import Post, Category  # 함수 내부에서 임포트
    # ...
```

**사용 위치**:
- `app/main/routes.py`: 모델, 폼 임포트
- `app/auth/routes.py`: 모델, 폼 임포트
- `app/admin/routes.py`: 모델, 폼 임포트

### 6.2 Blueprint 임포트 순서

```
1. Blueprint 생성 (__init__.py)
2. routes 임포트 (__init__.py)
3. routes에서 Blueprint 사용
```

**예시**:
```python
# app/main/__init__.py
from flask import Blueprint
main = Blueprint('main', __name__)
from . import routes  # Blueprint 생성 후 임포트
```

## 7. 설정 의존성

### 7.1 환경변수 의존성

**config.py**:
- `SECRET_KEY`: 환경변수 또는 기본값
- `DATABASE_URL`: 환경변수 또는 기본값

**사용 위치**:
- `app/__init__.py`: `create_app()`에서 설정 로드

### 7.2 설정 클래스 의존성

```
Config (기본)
  ├── DevelopmentConfig
  └── ProductionConfig
```

**사용 위치**:
- `run.py`: `create_app()` 호출 시 설정 이름 전달
- `init_db.py`: `create_app('development')` 호출

## 8. 초기화 순서

### 8.1 애플리케이션 초기화 순서

```
1. Flask 인스턴스 생성
2. 설정 로드 (config.py)
3. 확장 초기화
   - db.init_app(app)
   - login_manager.init_app(app)
   - migrate.init_app(app, db)
4. Blueprint 등록
   - main_blueprint
   - auth_blueprint
   - admin_blueprint
```

### 8.2 데이터베이스 초기화 순서

```
1. create_app() 호출
2. app.app_context() 진입
3. db.create_all() 실행
4. 초기 데이터 생성
   - User 생성
   - Category 생성
   - Post 생성 (선택)
```

## 9. 런타임 의존성

### 9.1 요청 처리 시 의존성

```
HTTP 요청
  ↓
Flask 라우팅
  ↓
Blueprint 라우트 매칭
  ↓
라우트 핸들러 실행
  ├── 모델 쿼리 (SQLAlchemy)
  ├── 폼 검증 (WTForms)
  └── 템플릿 렌더링 (Jinja2)
```

### 9.2 세션 의존성

```
Flask-Login
  ├── 세션 쿠키
  ├── current_user (요청 컨텍스트)
  └── login_required 데코레이터
```

## 10. 의존성 체크리스트

### 10.1 필수 의존성
- [x] Flask
- [x] Flask-SQLAlchemy
- [x] Flask-Login
- [x] Flask-WTF
- [x] Flask-Migrate
- [x] Werkzeug
- [x] WTForms
- [x] email-validator

### 10.2 선택적 의존성
- [x] python-dotenv (환경변수 관리)
- [ ] Flask-Mail (이메일 발송, 미구현)
- [ ] Flask-Babel (다국어 지원, 미구현)

### 10.3 개발 의존성
- [ ] pytest (테스트, 미구현)
- [ ] Flask-Testing (테스트 유틸리티, 미구현)

