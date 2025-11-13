# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

ePlan은 Flask 기반의 교육 서비스 웹사이트입니다. 전화영어, 기업출강, Writing 첨삭 등의 교육 서비스를 제공하는 회사의 웹사이트로, 관리자 패널과 게시판 시스템을 포함합니다.

## 개발 환경 설정

### 초기 설정
```bash
# 가상환경 생성 및 활성화
python -m venv venv
venv\Scripts\activate  # Windows
source venv/bin/activate  # Mac/Linux

# 의존성 설치
pip install -r requirements.txt

# 데이터베이스 초기화
python init_db.py
```

### 애플리케이션 실행
```bash
# 개발 서버 실행
python run.py

# 기본 접속 URL: http://localhost:5000
```

### 데이터베이스 마이그레이션
```bash
# 마이그레이션 초기화
flask db init

# 마이그레이션 생성
flask db migrate -m "migration message"

# 마이그레이션 적용
flask db upgrade
```

### 기본 관리자 계정
- 사용자명: `admin`
- 비밀번호: `admin123`
- 로그인 URL: http://localhost:5000/auth/login

## 프로젝트 구조

### 애플리케이션 팩토리 패턴
`create_app()` 함수를 통해 Flask 앱을 생성합니다. Blueprint 기반으로 모듈화되어 있습니다.

### 주요 디렉토리
- `app/`: 메인 애플리케이션 코드
  - `main/`: 공개 페이지 라우트
  - `auth/`: 인증 관련 라우트
  - `admin/`: 관리자 페이지 라우트
  - `models.py`: SQLAlchemy 데이터베이스 모델
  - `forms.py`: WTForms 폼 정의
- `app/templates/`: Jinja2 템플릿 파일
- `app/static/`: 정적 파일 (CSS, JS, 이미지)
- `planning/`: 기획 문서 및 개발 계획

### Blueprint 구조
1. **main** (`/`): 공개 페이지
   - 홈페이지, 회사소개, 서비스 페이지, 게시판
2. **auth** (`/auth`): 인증
   - 로그인, 로그아웃
3. **admin** (`/admin`): 관리자
   - 게시글 관리, 문의 관리

## 데이터베이스 모델

### User
관리자 계정 정보 저장. Flask-Login을 통한 인증에 사용됩니다.

### Category
게시판 카테고리 (공지사항, 뉴스, 영어, 일본어, 중국어)

### Post
게시글. Category와 User에 대한 외래키를 가지며, 조회수와 발행 상태를 관리합니다.

### ConsultingInquiry
컨설팅 문의 폼 제출 데이터

### InstructorApplication
강사 지원 폼 제출 데이터

## 주요 라우트

### 공개 페이지
- `/` - 홈페이지
- `/company` - 회사소개
- `/phone-english` - 전화영어 소개
- `/phone-english/<curriculum>` - 전화영어 커리큘럼 상세
- `/corporate-programs` - 기업출강 소개
- `/corporate-programs/<program>` - 기업출강 프로그램 상세
- `/writing-correction` - Writing 첨삭 소개
- `/consulting` - 컨설팅 문의 (GET/POST)
- `/for-instructors` - 강사 지원 (GET/POST)
- `/board/<category>` - 카테고리별 게시판 목록
- `/board/<category>/<post_id>` - 게시글 상세

### 관리자 페이지
- `/admin` - 관리자 대시보드
- `/admin/posts` - 게시글 목록
- `/admin/posts/new` - 게시글 작성
- `/admin/posts/<id>/edit` - 게시글 수정
- `/admin/posts/<id>/delete` - 게시글 삭제
- `/admin/consulting` - 컨설팅 문의 관리
- `/admin/instructors` - 강사 지원 관리

## 설정 (config.py)

### 개발 환경
- DEBUG 모드 활성화
- SQLite 데이터베이스 (`eplan.db`)

### 주요 설정값
- `POSTS_PER_PAGE`: 10 (페이지당 게시글 수)
- `UPLOAD_FOLDER`: 파일 업로드 디렉토리
- `MAX_CONTENT_LENGTH`: 16MB (최대 업로드 크기)
- `ALLOWED_EXTENSIONS`: 이미지 파일 확장자

## 개발 가이드라인

### 새 페이지 추가
1. `app/main/routes.py`에 라우트 함수 추가
2. `app/templates/` 하위에 템플릿 파일 생성
3. `base.html`을 상속받아 일관된 레이아웃 유지

### 새 게시판 카테고리 추가
1. `init_db.py`에서 Category 객체 추가
2. 데이터베이스 초기화 다시 실행하거나 직접 DB에 추가

### 이미지 자산
- 메인 콘텐츠 이미지: `main_contents_img/`
- 교재 이미지: `books_img/`
- 고객사 로고: `clients_img/`, `clientsgroup_img/`

## 한국어 우선
모든 커뮤니케이션, UI 텍스트, 에러 메시지, 플래시 메시지는 한국어로 작성합니다. 템플릿, 폼 레이블, 검증 메시지, 주석, 문서 모두 한국어를 사용합니다.
