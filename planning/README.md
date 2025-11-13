# ePlan Flask MVP

영어 교육 기관 ePlan의 웹사이트 Flask 기반 MVP 버전

## 기술 스택

- **Backend**: Flask 3.0+
- **ORM**: Flask-SQLAlchemy
- **인증**: Flask-Login
- **DB**: SQLite (개발용)
- **템플릿**: Jinja2
- **Frontend**: HTML5, CSS3, Vanilla JS

## 설치 및 실행

### 1. 가상환경 생성 및 활성화

```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Linux/Mac
python3 -m venv venv
source venv/bin/activate
```

### 2. 패키지 설치

```bash
pip install -r requirements.txt
```

### 3. 데이터베이스 초기화

```bash
python init_db.py
```

### 4. 애플리케이션 실행

```bash
python run.py
```

브라우저에서 http://localhost:5000 접속

## 초기 로그인 정보

- **사용자명**: admin
- **비밀번호**: admin123
- **로그인 URL**: http://localhost:5000/auth/login

## 주요 기능

### 공개 페이지
- 메인 랜딩 페이지
- 회사소개 (Our Mission, Service, Organization, Clients)
- 전화영어 소개 (4개 코스별 상세 정보)
- 게시판 (공지사항, 뉴스)

### 관리자 페이지
- 로그인/로그아웃
- 대시보드 (통계, 최근 게시글)
- 게시판 관리 (CRUD)

## 프로젝트 구조

```
eplan/
├── app/
│   ├── __init__.py          # Flask app 초기화
│   ├── models.py            # DB 모델
│   ├── forms.py             # WTForms
│   ├── auth/                # 인증 블루프린트
│   ├── admin/               # 관리자 블루프린트
│   ├── main/                # 메인 블루프린트
│   ├── static/              # 정적 파일
│   │   ├── css/
│   │   ├── js/
│   │   └── images/
│   └── templates/           # Jinja2 템플릿
│       ├── base.html
│       ├── index.html
│       ├── company/
│       ├── phone_english/
│       ├── board/
│       ├── auth/
│       └── admin/
├── config.py                # 설정 파일
├── run.py                   # 실행 파일
├── init_db.py              # DB 초기화 스크립트
└── requirements.txt         # 패키지 목록
```

## 디자인 테마

### 색상 팔레트
- **메인**: #C0EFED (밝은 틸), #A9DBDA, #63A19B, #00635C (진한 틸)
- **강조**: #FFB74D (따뜻한 오렌지), #FF8A65 (코랄)
- **배경**: #FAFAFA (오프 화이트)
- **텍스트**: #263238 (진한 그레이)

### 레이아웃
- 최대 너비: 1200px
- 반응형 디자인 (모바일/태블릿/데스크톱)
- Full screen sections

## 데이터베이스 모델

### User (관리자)
- id, username, email, password_hash, created_at

### Category (게시판 카테고리)
- id, name, slug, created_at

### Post (게시글)
- id, title, content, category_id, author_id, views, is_published, created_at, updated_at

## 개발 가이드

### 새로운 게시판 카테고리 추가

```python
# init_db.py에 카테고리 추가
Category(name='새 카테고리', slug='new-category')
```

### 템플릿 확장

```html
{% extends "base.html" %}
{% block title %}페이지 제목{% endblock %}
{% block content %}
<!-- 내용 -->
{% endblock %}
```

## 프로덕션 배포 시 주의사항

1. **SECRET_KEY 변경**: config.py의 SECRET_KEY를 안전한 값으로 변경
2. **관리자 비밀번호 변경**: 초기 admin 계정 비밀번호 변경
3. **DEBUG 모드 비활성화**: 프로덕션 환경에서 DEBUG=False
4. **데이터베이스**: SQLite에서 PostgreSQL 등으로 전환
5. **HTTPS 적용**: SSL 인증서 설정
6. **환경 변수**: .env 파일로 중요 정보 관리

## 라이선스

Copyright 2025 ePlan. All rights reserved.

