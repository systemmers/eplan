# eplan 프로젝트 구조 문서

생성일: 2025-01-26

## 1. 전체 프로젝트 구조

```
eplan/
├── app/                          # 애플리케이션 패키지
│   ├── __init__.py              # 애플리케이션 팩토리
│   ├── models.py                # 데이터베이스 모델
│   ├── forms.py                 # WTForms 정의
│   ├── main/                    # 메인 Blueprint
│   │   ├── __init__.py
│   │   └── routes.py
│   ├── auth/                    # 인증 Blueprint
│   │   ├── __init__.py
│   │   └── routes.py
│   ├── admin/                   # 관리자 Blueprint
│   │   ├── __init__.py
│   │   └── routes.py
│   ├── static/                  # 정적 파일
│   │   ├── css/
│   │   ├── js/
│   │   ├── images/
│   │   └── videos/
│   └── templates/               # Jinja2 템플릿
│       ├── base.html
│       ├── index.html
│       ├── company/
│       ├── phone_english/
│       ├── corporate/
│       ├── board/
│       ├── auth/
│       └── admin/
├── config.py                    # 설정 파일
├── run.py                       # 실행 진입점
├── init_db.py                   # 데이터베이스 초기화
├── requirements.txt             # 패키지 의존성
└── eplan.db                     # SQLite 데이터베이스
```

## 2. 애플리케이션 계층 구조

### 2.1 프레젠테이션 계층

```
템플릿 (Jinja2)
    ↓
라우트 핸들러 (Blueprint routes)
    ↓
비즈니스 로직 (라우트 내부)
    ↓
데이터 접근 계층 (SQLAlchemy ORM)
    ↓
데이터베이스 (SQLite)
```

### 2.2 모듈 계층

```
run.py
    ↓
app/__init__.py (create_app)
    ├── config.py (설정)
    ├── models.py (데이터 모델)
    ├── forms.py (폼 정의)
    ├── main/ (공개 페이지)
    ├── auth/ (인증)
    └── admin/ (관리자)
```

## 3. Blueprint 구조 상세

### 3.1 main Blueprint

**역할**: 공개 페이지 제공

**파일 구조**:
```
app/main/
├── __init__.py          # Blueprint 생성 및 routes 임포트
└── routes.py            # 라우트 정의
```

**주요 함수**:
- `index()`: 메인 페이지
- `company()`: 회사소개
- `phone_english()`: 전화영어 소개
- `phone_english_detail(curriculum)`: 전화영어 상세
- `corporate_programs()`: 기업출강 소개
- `corporate_program_detail(program)`: 기업출강 상세
- `writing_correction()`: Writing 첨삭
- `consulting()`: 컨설팅 문의 (GET/POST)
- `for_instructors()`: 강사 지원 (GET/POST)
- `board_list(category)`: 게시판 목록
- `board_detail(category, post_id)`: 게시글 상세

**의존성**:
- `app.models`: Post, Category, ConsultingInquiry, InstructorApplication
- `app.forms`: ConsultingForm, InstructorApplicationForm
- `app`: db

### 3.2 auth Blueprint

**역할**: 사용자 인증 관리

**파일 구조**:
```
app/auth/
├── __init__.py          # Blueprint 생성 및 routes 임포트
└── routes.py            # 라우트 정의
```

**주요 함수**:
- `login()`: 로그인 (GET/POST)
- `logout()`: 로그아웃

**의존성**:
- `app.models`: User
- `app.forms`: LoginForm
- `app`: db
- `flask_login`: login_user, logout_user, current_user

### 3.3 admin Blueprint

**역할**: 관리자 기능 제공

**파일 구조**:
```
app/admin/
├── __init__.py          # Blueprint 생성 및 routes 임포트
└── routes.py            # 라우트 정의
```

**주요 함수**:
- `dashboard()`: 관리자 대시보드
- `posts()`: 게시글 목록
- `new_post()`: 새 게시글 작성 (GET/POST)
- `edit_post(post_id)`: 게시글 수정 (GET/POST)
- `delete_post(post_id)`: 게시글 삭제 (POST)

**보안**:
- 모든 라우트에 `@login_required` 데코레이터 적용

**의존성**:
- `app.models`: Post, Category
- `app.forms`: PostForm
- `app`: db
- `flask_login`: login_required, current_user

## 4. 데이터 모델 구조

### 4.1 모델 계층 구조

```
app/models.py
├── User (UserMixin 상속)
│   ├── id
│   ├── username
│   ├── email
│   ├── password_hash
│   ├── created_at
│   └── posts (relationship)
│
├── Category
│   ├── id
│   ├── name
│   ├── slug
│   ├── created_at
│   └── posts (relationship)
│
├── Post
│   ├── id
│   ├── title
│   ├── content
│   ├── views
│   ├── is_published
│   ├── created_at
│   ├── updated_at
│   ├── category_id (FK)
│   └── author_id (FK)
│
├── ConsultingInquiry
│   ├── id
│   ├── company_name
│   ├── name
│   ├── email
│   ├── phone
│   ├── interested_courses
│   ├── message
│   └── created_at
│
└── InstructorApplication
    ├── id
    ├── name
    ├── email
    ├── phone
    ├── education
    ├── experience
    ├── certificates
    ├── motivation
    └── created_at
```

### 4.2 관계 매핑

```
User 1 ────────< N Post (author)
Category 1 ────< N Post
```

## 5. 폼 구조

### 5.1 폼 계층 구조

```
app/forms.py
├── LoginForm (FlaskForm)
│   ├── username (StringField)
│   ├── password (PasswordField)
│   └── remember_me (BooleanField)
│
├── PostForm (FlaskForm)
│   ├── title (StringField)
│   ├── content (TextAreaField)
│   ├── category_id (SelectField)
│   └── is_published (BooleanField)
│
├── ConsultingForm (FlaskForm)
│   ├── company_name (StringField)
│   ├── name (StringField)
│   ├── email (StringField)
│   ├── phone (StringField)
│   ├── interested_courses (StringField)
│   └── message (TextAreaField)
│
└── InstructorApplicationForm (FlaskForm)
    ├── name (StringField)
    ├── email (StringField)
    ├── phone (StringField)
    ├── education (TextAreaField)
    ├── experience (TextAreaField)
    ├── certificates (TextAreaField)
    └── motivation (TextAreaField)
```

## 6. 정적 파일 구조

### 6.1 CSS 구조

```
app/static/css/
├── main.css                    # 메인 진입점
│
├── 01-base/                    # 기본 스타일
│   ├── variables.css          # CSS 변수 정의
│   ├── reset.css              # CSS 리셋
│   └── typography.css         # 타이포그래피
│
├── 02-layout/                  # 레이아웃
│   ├── header.css             # 헤더 스타일
│   ├── footer.css             # 푸터 스타일
│   └── grid.css               # 그리드 시스템
│
├── 03-components/              # 컴포넌트
│   ├── buttons.css            # 버튼 스타일
│   ├── cards.css              # 카드 컴포넌트
│   ├── forms.css              # 폼 스타일
│   ├── tables.css             # 테이블 스타일
│   ├── pagination.css         # 페이지네이션
│   ├── modals.css             # 모달 컴포넌트
│   ├── accordion.css          # 아코디언 컴포넌트
│   └── alerts.css             # 알림 메시지
│
├── 04-pages/                   # 페이지별 스타일
│   ├── common.css             # 공통 페이지 스타일
│   ├── home.css               # 홈 페이지
│   ├── company.css            # 회사소개
│   ├── phone-english.css      # 전화영어
│   ├── board.css              # 게시판
│   ├── admin.css              # 관리자 페이지
│   └── curriculum-detail.css  # 커리큘럼 상세
│
└── 05-utilities/               # 유틸리티 클래스
    └── utilities.css          # 헬퍼 클래스
```

### 6.2 JavaScript 구조

```
app/static/js/
├── main.js                     # 메인 JavaScript
├── modal.js                    # 모달 제어
├── accordion.js                # 아코디언 제어
└── slider.js                   # 슬라이더 제어
```

## 7. 템플릿 구조

### 7.1 템플릿 계층 구조

```
app/templates/
├── base.html                   # 기본 템플릿
│
├── index.html                  # 메인 페이지
│
├── company/
│   └── index.html              # 회사소개
│
├── phone_english/
│   ├── index.html              # 전화영어 소개
│   ├── general-conversation.html
│   ├── business-conversation.html
│   ├── discussion.html
│   └── test-prep.html
│
├── corporate/
│   ├── index.html              # 기업출강 소개
│   ├── in-house.html
│   ├── intensive.html
│   ├── executive.html
│   ├── resident.html
│   ├── blended.html
│   └── oct.html
│
├── board/
│   ├── list.html               # 게시판 목록
│   └── detail.html             # 게시글 상세
│
├── consulting/
│   └── index.html              # 컨설팅 문의
│
├── instructors/
│   └── index.html              # 강사 지원
│
├── writing/
│   └── index.html              # Writing 첨삭
│
├── auth/
│   └── login.html              # 로그인
│
└── admin/
    ├── dashboard.html           # 관리자 대시보드
    ├── posts.html               # 게시글 목록
    └── post_form.html           # 게시글 작성/수정
```

### 7.2 템플릿 상속 구조

```
base.html
├── {% block title %}
├── {% block meta_description %}
├── {% block extra_css %}
├── {% block content %}
└── {% block extra_js %}
```

## 8. 설정 구조

### 8.1 설정 계층

```
config.py
├── Config (기본 설정)
│   ├── SECRET_KEY
│   ├── SQLALCHEMY_DATABASE_URI
│   ├── SQLALCHEMY_TRACK_MODIFICATIONS
│   ├── REMEMBER_COOKIE_DURATION
│   ├── POSTS_PER_PAGE
│   ├── UPLOAD_FOLDER
│   ├── MAX_CONTENT_LENGTH
│   └── ALLOWED_EXTENSIONS
│
├── DevelopmentConfig (개발 환경)
│   └── DEBUG = True
│
├── ProductionConfig (프로덕션 환경)
│   └── DEBUG = False
│
└── config 딕셔너리
    ├── 'development': DevelopmentConfig
    ├── 'production': ProductionConfig
    └── 'default': DevelopmentConfig
```

## 9. 실행 흐름

### 9.1 애플리케이션 시작 흐름

```
1. run.py 실행
   ↓
2. create_app() 호출
   ↓
3. Flask 인스턴스 생성
   ↓
4. 설정 로드 (config.py)
   ↓
5. 확장 초기화
   - db.init_app(app)
   - login_manager.init_app(app)
   - migrate.init_app(app, db)
   ↓
6. Blueprint 등록
   - main_blueprint
   - auth_blueprint (/auth)
   - admin_blueprint (/admin)
   ↓
7. 개발 서버 시작 (0.0.0.0:5000)
```

### 9.2 요청 처리 흐름

```
1. HTTP 요청 수신
   ↓
2. Flask 라우팅
   ↓
3. Blueprint 라우트 매칭
   ↓
4. 라우트 핸들러 실행
   ↓
5. 비즈니스 로직 처리
   - 모델 쿼리
   - 폼 검증
   - 데이터 처리
   ↓
6. 템플릿 렌더링
   ↓
7. HTTP 응답 반환
```

## 10. 파일별 역할 요약

### 10.1 핵심 파일

| 파일 | 역할 | 주요 내용 |
|------|------|----------|
| `run.py` | 실행 진입점 | 애플리케이션 생성 및 서버 시작 |
| `config.py` | 설정 관리 | 환경별 설정 클래스 정의 |
| `app/__init__.py` | 애플리케이션 팩토리 | create_app() 함수, 확장 초기화 |
| `app/models.py` | 데이터 모델 | SQLAlchemy 모델 정의 |
| `app/forms.py` | 폼 정의 | WTForms 폼 클래스 정의 |
| `init_db.py` | DB 초기화 | 테이블 생성 및 초기 데이터 |

### 10.2 Blueprint 파일

| Blueprint | 파일 | 역할 |
|-----------|------|------|
| main | `app/main/routes.py` | 공개 페이지 라우트 |
| auth | `app/auth/routes.py` | 인증 라우트 |
| admin | `app/admin/routes.py` | 관리자 라우트 |

### 10.3 정적 파일

| 디렉토리 | 역할 |
|----------|------|
| `static/css/` | 스타일시트 모듈 |
| `static/js/` | JavaScript 모듈 |
| `static/images/` | 이미지 리소스 |
| `static/videos/` | 비디오 리소스 |

### 10.4 템플릿 파일

| 디렉토리 | 역할 |
|----------|------|
| `templates/` | Jinja2 템플릿 파일 |
| `templates/base.html` | 기본 레이아웃 템플릿 |

