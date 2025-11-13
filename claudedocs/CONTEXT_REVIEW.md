# eplan app 컨텍스트 검토 보고서

생성일: 2025-01-26

## 1. 프로젝트 개요

### 1.1 프로젝트 정보
- **프로젝트명**: ePlan Flask MVP
- **목적**: 영어 교육 기관 ePlan의 웹사이트 Flask 기반 MVP 버전
- **기술 스택**: Flask 3.0+, Flask-SQLAlchemy, Flask-Login, Flask-WTF, Flask-Migrate
- **데이터베이스**: SQLite (개발용)

### 1.2 애플리케이션 구조
- **패턴**: Application Factory 패턴
- **모듈화**: Blueprint 기반 모듈화
- **인증**: Flask-Login 기반 세션 관리
- **ORM**: Flask-SQLAlchemy
- **마이그레이션**: Flask-Migrate

## 2. 프로젝트 구조 분석

### 2.1 디렉토리 구조

```
app/
├── __init__.py              # 애플리케이션 팩토리 및 초기화
├── models.py                # 데이터베이스 모델 정의
├── forms.py                 # WTForms 폼 정의
├── main/                    # 메인 Blueprint
│   ├── __init__.py
│   └── routes.py            # 공개 페이지 라우트
├── auth/                    # 인증 Blueprint
│   ├── __init__.py
│   └── routes.py            # 로그인/로그아웃 라우트
├── admin/                   # 관리자 Blueprint
│   ├── __init__.py
│   └── routes.py            # 관리자 대시보드 및 게시글 관리
├── static/                  # 정적 파일
│   ├── css/                 # CSS 모듈화 구조
│   │   ├── 01-base/         # 기본 스타일
│   │   ├── 02-layout/       # 레이아웃
│   │   ├── 03-components/   # 컴포넌트
│   │   ├── 04-pages/        # 페이지별 스타일
│   │   ├── 05-utilities/    # 유틸리티
│   │   └── main.css         # 메인 CSS 진입점
│   ├── js/                  # JavaScript 모듈
│   ├── images/              # 이미지 리소스
│   └── videos/              # 비디오 리소스
└── templates/               # Jinja2 템플릿
    ├── base.html            # 기본 템플릿
    ├── index.html           # 메인 페이지
    ├── company/             # 회사소개
    ├── phone_english/       # 전화영어
    ├── corporate/          # 기업출강
    ├── board/               # 게시판
    ├── auth/                # 인증
    └── admin/                # 관리자
```

### 2.2 모듈 간 의존성 관계

```
run.py
  └── app/__init__.py (create_app)
      ├── config.py (설정)
      ├── models.py
      │   ├── db (SQLAlchemy)
      │   └── login_manager (Flask-Login)
      ├── forms.py
      │   └── models.py (User)
      ├── main/
      │   └── routes.py
      │       ├── models.py (Post, Category)
      │       ├── forms.py (ConsultingForm, InstructorApplicationForm)
      │       └── db
      ├── auth/
      │   └── routes.py
      │       ├── models.py (User)
      │       ├── forms.py (LoginForm)
      │       └── db
      └── admin/
          └── routes.py
              ├── models.py (Post, Category)
              ├── forms.py (PostForm)
              └── db
```

## 3. 핵심 컴포넌트 검토

### 3.1 데이터베이스 모델 (app/models.py)

#### User 모델
- **역할**: 관리자 계정 관리
- **필드**: id, username, email, password_hash, created_at
- **관계**: posts (Post와 1:N)
- **메서드**: set_password(), check_password()

#### Category 모델
- **역할**: 게시판 카테고리 관리
- **필드**: id, name, slug, created_at
- **관계**: posts (Post와 1:N)
- **초기 데이터**: notice, news, english, japanese, chinese

#### Post 모델
- **역할**: 게시글 관리
- **필드**: id, title, content, views, is_published, created_at, updated_at
- **외래키**: category_id, author_id
- **기능**: 조회수 카운팅, 게시/비게시 상태 관리

#### ConsultingInquiry 모델
- **역할**: 컨설팅 문의 수집
- **필드**: id, company_name, name, email, phone, interested_courses, message, created_at

#### InstructorApplication 모델
- **역할**: 강사 지원서 수집
- **필드**: id, name, email, phone, education, experience, certificates, motivation, created_at

### 3.2 폼 정의 (app/forms.py)

#### LoginForm
- **필드**: username, password, remember_me
- **검증**: DataRequired, Length(1, 80)

#### PostForm
- **필드**: title, content, category_id, is_published
- **검증**: DataRequired, Length(1, 200)

#### ConsultingForm
- **필드**: company_name, name, email, phone, interested_courses, message
- **검증**: DataRequired, Email, Length

#### InstructorApplicationForm
- **필드**: name, email, phone, education, experience, certificates, motivation
- **검증**: DataRequired, Email, Length

### 3.3 Blueprint 구조

#### main Blueprint
- **URL Prefix**: 없음 (루트)
- **기능**: 공개 페이지 라우팅
- **주요 라우트**:
  - `/`: 메인 페이지
  - `/company`: 회사소개
  - `/phone-english`: 전화영어 소개
  - `/phone-english/<curriculum>`: 전화영어 상세
  - `/corporate-programs`: 기업출강 소개
  - `/corporate-programs/<program>`: 기업출강 상세
  - `/writing-correction`: Writing 첨삭
  - `/consulting`: 컨설팅 문의 (GET/POST)
  - `/for-instructors`: 강사 지원 (GET/POST)
  - `/board/<category>`: 게시판 목록
  - `/board/<category>/<post_id>`: 게시글 상세

#### auth Blueprint
- **URL Prefix**: `/auth`
- **기능**: 인증 관리
- **주요 라우트**:
  - `/auth/login`: 로그인 (GET/POST)
  - `/auth/logout`: 로그아웃

#### admin Blueprint
- **URL Prefix**: `/admin`
- **기능**: 관리자 기능
- **보호**: @login_required 데코레이터
- **주요 라우트**:
  - `/admin/`: 대시보드
  - `/admin/posts`: 게시글 목록
  - `/admin/posts/new`: 새 게시글 작성 (GET/POST)
  - `/admin/posts/<post_id>/edit`: 게시글 수정 (GET/POST)
  - `/admin/posts/<post_id>/delete`: 게시글 삭제 (POST)

### 3.4 정적 파일 구조

#### CSS 구조화
- **01-base**: variables.css, reset.css, typography.css
- **02-layout**: header.css, footer.css, grid.css
- **03-components**: buttons, cards, forms, tables, pagination, modals, accordion, alerts
- **04-pages**: common, home, company, phone-english, board, admin, curriculum-detail
- **05-utilities**: utilities.css
- **main.css**: 모든 CSS 모듈 통합 진입점

#### JavaScript 모듈
- **main.js**: 공통 JavaScript 기능
- **modal.js**: 모달 UI 제어
- **accordion.js**: 아코디언 컴포넌트
- **slider.js**: 슬라이더 컴포넌트

### 3.5 템플릿 구조

#### base.html
- **기능**: 기본 레이아웃 템플릿
- **특징**: HTMX 통합, 반응형 네비게이션, Flash 메시지 지원
- **블록**: title, meta_description, content, extra_css, extra_js

#### 템플릿 계층
- **공개 페이지**: index.html, company/, phone_english/, corporate/, board/, consulting/, instructors/, writing/
- **인증**: auth/login.html
- **관리자**: admin/dashboard.html, admin/posts.html, admin/post_form.html

## 4. 아키텍처 패턴 분석

### 4.1 Application Factory 패턴

```python
# app/__init__.py
def create_app(config_name='default'):
    app = Flask(__name__)
    app.config.from_object(config[config_name])
    
    # 확장 초기화
    db.init_app(app)
    login_manager.init_app(app)
    migrate.init_app(app, db)
    
    # Blueprint 등록
    app.register_blueprint(main_blueprint)
    app.register_blueprint(auth_blueprint, url_prefix='/auth')
    app.register_blueprint(admin_blueprint, url_prefix='/admin')
    
    return app
```

**장점**:
- 테스트 용이성
- 다중 인스턴스 생성 가능
- 설정 분리

### 4.2 Blueprint 기반 모듈화

**구조**:
- 각 Blueprint는 독립적인 모듈
- `__init__.py`에서 Blueprint 생성 및 routes 임포트
- 순환 참조 방지를 위한 지연 임포트 패턴 사용

**예시**:
```python
# app/main/__init__.py
from flask import Blueprint
main = Blueprint('main', __name__)
from . import routes
```

### 4.3 Flask-Login 인증 시스템

**구현**:
- `@login_manager.user_loader`로 사용자 로드
- `@login_required` 데코레이터로 보호된 라우트
- 세션 기반 인증
- Remember me 기능 지원

### 4.4 Flask-SQLAlchemy ORM

**특징**:
- 모델 정의 간소화
- 관계형 데이터 관리 (relationship, backref)
- 쿼리 인터페이스 제공

### 4.5 Flask-Migrate 마이그레이션

**기능**:
- 데이터베이스 스키마 버전 관리
- 마이그레이션 생성 및 적용
- 롤백 지원

## 5. 주요 기능 매핑

### 5.1 공개 페이지 기능

| 경로 | 기능 | 템플릿 | 데이터 |
|------|------|--------|--------|
| `/` | 메인 랜딩 페이지 | index.html | 카테고리별 게시글 수 |
| `/company` | 회사소개 | company/index.html | 정적 콘텐츠 |
| `/phone-english` | 전화영어 소개 | phone_english/index.html | 정적 콘텐츠 |
| `/phone-english/<curriculum>` | 전화영어 상세 | phone_english/{curriculum}.html | 정적 콘텐츠 |
| `/corporate-programs` | 기업출강 소개 | corporate/index.html | 정적 콘텐츠 |
| `/corporate-programs/<program>` | 기업출강 상세 | corporate/{program}.html | 정적 콘텐츠 |
| `/writing-correction` | Writing 첨삭 | writing/index.html | 정적 콘텐츠 |
| `/consulting` | 컨설팅 문의 | consulting/index.html | ConsultingForm |
| `/for-instructors` | 강사 지원 | instructors/index.html | InstructorApplicationForm |
| `/board/<category>` | 게시판 목록 | board/list.html | Post 목록 (페이지네이션) |
| `/board/<category>/<post_id>` | 게시글 상세 | board/detail.html | Post, 이전/다음글 |

### 5.2 관리자 기능

| 경로 | 기능 | 템플릿 | 보호 |
|------|------|--------|------|
| `/admin/` | 대시보드 | admin/dashboard.html | @login_required |
| `/admin/posts` | 게시글 목록 | admin/posts.html | @login_required |
| `/admin/posts/new` | 게시글 작성 | admin/post_form.html | @login_required |
| `/admin/posts/<post_id>/edit` | 게시글 수정 | admin/post_form.html | @login_required |
| `/admin/posts/<post_id>/delete` | 게시글 삭제 | 리다이렉트 | @login_required |

### 5.3 인증 기능

| 경로 | 기능 | 템플릿 | 메서드 |
|------|------|--------|--------|
| `/auth/login` | 로그인 | auth/login.html | GET, POST |
| `/auth/logout` | 로그아웃 | 리다이렉트 | GET |

## 6. 데이터베이스 스키마 요약

### 6.1 테이블 구조

#### users
- id (PK)
- username (UNIQUE, INDEX)
- email (UNIQUE)
- password_hash
- created_at

#### categories
- id (PK)
- name
- slug (UNIQUE, INDEX)
- created_at

#### posts
- id (PK)
- title
- content
- views (default: 0)
- is_published (default: True)
- created_at (INDEX)
- updated_at
- category_id (FK → categories.id)
- author_id (FK → users.id)

#### consulting_inquiries
- id (PK)
- company_name
- name
- email
- phone
- interested_courses
- message
- created_at

#### instructor_applications
- id (PK)
- name
- email
- phone
- education
- experience
- certificates
- motivation
- created_at

### 6.2 관계

- User 1:N Post (author)
- Category 1:N Post
- Post N:1 User (author)
- Post N:1 Category

## 7. 설정 및 환경

### 7.1 설정 파일 (config.py)

**Config 클래스**:
- SECRET_KEY: 환경변수 또는 기본값
- SQLALCHEMY_DATABASE_URI: SQLite 기본
- SQLALCHEMY_TRACK_MODIFICATIONS: False
- REMEMBER_COOKIE_DURATION: 7일
- POSTS_PER_PAGE: 10
- UPLOAD_FOLDER: 업로드 디렉토리
- MAX_CONTENT_LENGTH: 16MB
- ALLOWED_EXTENSIONS: 이미지 확장자

**환경별 설정**:
- development: DEBUG=True
- production: DEBUG=False
- default: DevelopmentConfig

### 7.2 실행 진입점 (run.py)

- `create_app()` 호출
- Shell context processor 설정
- 개발 서버 실행 (host='0.0.0.0', port=5000)

## 8. 개발 가이드라인 및 컨벤션

### 8.1 코드 구조 컨벤션

- **모델**: `app/models.py`에 모든 모델 정의
- **폼**: `app/forms.py`에 모든 폼 정의
- **라우트**: Blueprint별 `routes.py`에 분리
- **템플릿**: 기능별 디렉토리 구조

### 8.2 네이밍 컨벤션

- **모델**: PascalCase (User, Post, Category)
- **함수/변수**: snake_case (board_list, post_id)
- **Blueprint**: 소문자 (main, auth, admin)
- **템플릿**: snake_case (post_form.html)

### 8.3 의존성 관리

- **순환 참조 방지**: 함수 내부에서 임포트
- **Blueprint 등록**: `create_app()` 내에서
- **확장 초기화**: `create_app()` 내에서

### 8.4 보안 고려사항

- 비밀번호 해싱: Werkzeug의 generate_password_hash 사용
- CSRF 보호: Flask-WTF 기본 제공
- SQL Injection 방지: SQLAlchemy ORM 사용
- XSS 방지: Jinja2 자동 이스케이핑

## 9. 향후 개발 고려사항

### 9.1 개선 가능 영역

1. **서비스 계층 분리**: 비즈니스 로직을 라우트에서 분리
2. **에러 핸들링**: 전역 에러 핸들러 추가
3. **로깅**: 구조화된 로깅 시스템
4. **테스트**: 단위 테스트 및 통합 테스트 추가
5. **API**: RESTful API 엔드포인트 추가
6. **캐싱**: 자주 조회되는 데이터 캐싱
7. **파일 업로드**: 게시글 첨부파일 기능

### 9.2 확장 가능성

- 다국어 지원 (Flask-Babel)
- 이메일 알림 (Flask-Mail)
- 검색 기능 (Full-text search)
- 댓글 시스템
- 사용자 권한 관리 (Flask-Principal)
- 실시간 알림 (WebSocket)

## 10. 체크리스트

### 10.1 프로젝트 구조
- [x] Application Factory 패턴 구현
- [x] Blueprint 모듈화 완료
- [x] 정적 파일 구조화
- [x] 템플릿 계층 구조

### 10.2 핵심 기능
- [x] 사용자 인증 시스템
- [x] 게시판 CRUD 기능
- [x] 폼 제출 기능
- [x] 페이지네이션

### 10.3 데이터베이스
- [x] 모델 정의 완료
- [x] 관계 설정 완료
- [x] 마이그레이션 설정 완료
- [x] 초기 데이터 스크립트

### 10.4 보안
- [x] 비밀번호 해싱
- [x] CSRF 보호
- [x] 인증 데코레이터
- [ ] 환경변수 관리 (.env)

### 10.5 문서화
- [x] README.md
- [x] 컨텍스트 검토 문서
- [ ] API 문서
- [ ] 배포 가이드

