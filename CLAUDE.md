# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 핵심 규칙

- 모든 커뮤니케이션은 한국어로 진행
- 이모지 사용 금지
- DRY 원칙 준수, 코드 재활용 적극 권장
- 파일당 최대 500-800라인 유지
- 승인되지 않은 작업 금지
- 변경 전 의도가 불명확하면 질문하여 정보 수집

## 프로젝트 개요

ePlan은 Flask 기반의 교육 서비스 웹사이트입니다. 전화영어, 기업출강, Writing 첨삭 서비스를 제공하며, 문의/지원 폼은 이메일 전송 방식으로 처리합니다. 데이터베이스나 인증 시스템 없이 정적 콘텐츠 중심으로 운영됩니다.

## 개발 환경

```bash
# 초기 설정
python -m venv venv
venv\Scripts\activate  # Windows
pip install -r requirements.txt

# 개발 서버 실행
python run.py
# 접속: http://localhost:5200
```

## 아키텍처

### 애플리케이션 팩토리 패턴
`app/__init__.py`의 `create_app()` 함수로 Flask 앱 생성. Blueprint 기반 모듈화.

### 핵심 구조
```
app/
  __init__.py      # 앱 팩토리, Flask-Mail 초기화, static_url 컨텍스트 프로세서
  main/routes.py   # 모든 공개 라우트 정의
  forms.py         # WTForms 폼 클래스 (ConsultingForm, InstructorApplicationForm)
  templates/       # Jinja2 템플릿
  static/          # CSS, JS, 이미지
```

### 템플릿 구조
- `base.html`: 전체 레이아웃 기본 템플릿
- `macros/`: 재사용 가능한 Jinja2 매크로
- `demo/`: 스타일 데모 페이지들 (개발용)
- 서비스별 디렉토리: `phone_english/`, `corporate/`, `writing/`, `consulting/`, `instructors/`

### 폼 처리 방식
폼 제출 시 데이터베이스 저장 없이 Flask-Mail로 이메일 전송. 개발 환경에서는 `MAIL_SUPPRESS_SEND=true`로 콘솔 출력.

## 라우트 패턴

| 경로 패턴 | 설명 |
|----------|------|
| `/phone-english/<curriculum>` | 커리큘럼: general-conversation, business-conversation, discussion, test-prep |
| `/corporate-programs/<program>` | 프로그램: in-house, intensive, executive, resident, blended, oct |
| `/<service>/demo` | 각 서비스 스타일 데모 페이지 |

## 설정 (config.py)

| 설정 | 개발 환경 | 프로덕션 |
|-----|---------|---------|
| DEBUG | True | False |
| MAIL_SUPPRESS_SEND | True | False |
| STATIC_URL_PREFIX | 없음 | Cloud Storage URL |

환경 변수로 이메일 설정: `MAIL_SERVER`, `MAIL_PORT`, `MAIL_USERNAME`, `MAIL_PASSWORD`, `MAIL_RECIPIENT`

## 정적 파일 처리

`static_url()` 컨텍스트 프로세서 사용:
- 개발: Flask 기본 static 서버
- 프로덕션: `images/`, `videos/`는 Cloud Storage, CSS/JS는 GAE static

템플릿에서 사용: `{{ static_url('images/example.jpg') }}`

## 새 페이지 추가

1. `app/main/routes.py`에 라우트 함수 추가
2. `app/templates/` 하위에 템플릿 생성
3. `base.html` 상속하여 레이아웃 유지

## 배포

Google App Engine 사용. 상세 내용은 `DEPLOYMENT_GUIDE.md` 참조.

```bash
gcloud app deploy
```
