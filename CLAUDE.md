# CLAUDE.md

- This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.
- 항상 한국어로 커뮤니케이션 한다.



## rules

# 공통
- 모든 작업은 한국어로 커뮤니케이션하여라.
- 모든 작업에서 이모지를 사용하지 말아라.
- 모든 작업시 적용되는 날짜는 시스템 날짜를 적용하고 별도 지시나 기준이 있을시 해당 기준을 따른다.  

- 정확한 워딩 : 프롬프트는 워딩을 정확하게 사용하여 AI가 정확한 의도를 파악하여 목적 이탈을 최소화하고 달성을 극대화 한다. 
- 핵심 정리 : 각 문장을 목적에 부합하는 명확한 핵심만 정리하여 AI 최적화 프롬프트로 작성합니다.
- MECE 원칙 준수 : MECE (상호 배타적이고 집합적으로 완전한) 원칙을 준수합니다.
- 프롬프트 체이닝(Prompt Chaining : 단계적 구체화)을 적용하며. 준수합니다.
- CQRS(Command Query Responsibility Segregation : 명령과 조회)을 적용하며, 준수합니다.
- 원본 유지 및 비교 : 원본 문장을 유지하고, 변경한 문장을 추가하여 비교할 수 있게 합니다.
- 문장 개선 : 문맥과 부자연스러운 문장을 검증하여 최대한 자연스럽게 문장을 제안하고 개선합니다.
- 중복과 중의적이고 모호하며 유사한 의미의 문장은 그중 가장 목적에 부합하는 문장을 기준으로 합치고 개선하며, 필요에 따라 확장한다.  
- 한 번에 여러 다른 종류의 지시를 혼합하지 않고, 하나의 지시 문장에는 최대한 하나의 지시사항만 포함한다.
- 단계별 접근 : 작업을 논리적 단계로 나누어 지시합니다 (CoT: Chain of Thought 활용).
- 질문 유도 : AI가 충분한 정보를 얻을 때까지 지속적으로 질문하도록 유도합니다 (`질문 유도` 명시).
- 사고 유도 : "심호흡하고 차근차근", "단계별 사고 유도" 등의 문구를 사용하여 신중한 접근을 유도합니다.(Step by Step)
- 편견 제거 : 제안 및 기획 요청 시 편견 없는 창의적 답변을 요구합니다 (`당신의 대답에 편견이 없도록 주의`).
- 자료 제공 : 필요시 참고자료를 첨부하거나 참고할 수 있도록 합니다.


# 코드
- 중복된 코드, 함수, 기능 파일 금지하고 체크
- 코드 재활용 적극 권장 (DRY 원칙 준수)
- 프로젝트 컨벤션 규칙 체크
- 코드, 파일, 폴더 네이밍 규칙 준수 (snake_case, camelCase 등 일관성 유지)
- 코드, 파일, 폴더 작성 패턴 준수
- 프로젝트 구조가 개발문서에 최신 업데이트가 되고 있는지 체크
- 코드 작업전후 의존성 항상 파악
- 모듈화가 일관성있게 진행되고 준수하고 있는지 체크 (SOLID 원칙 적용)
- 코드 최상단에 일관된 형식으로 코드 인덱스 작성 (docstring, header comment)
- 최신 코드 베이스 유지
- 매직 넘버 및 하드코딩 금지 (상수화 또는 환경변수 사용)
- 단위 테스트 작성 권장
- 코드 리뷰 및 정적 분석 도구 활용
- 필요이상의 오버엔지니어링 금지.
- 승인하지 않은 작업 금지.
- 각 파일의 코드라인수는 최대 500~800라인 이내를 유지하는 아키텍쳐 구조로 작성하여라.


# 프로세스
- 질문 : 지시에 대하여 의도 파악이 어렵거나 더 높은 퀄리티의 정보를 얻기 위하여 필요한 경우 질문하여 정보를 수집하여라.
- 균형적인 대안 : 모든 계획 및 작업에 대하여 극단적 작업과 설정은 지양하고, 가장 효율적인 적절한 대안을 찾고 균형점을 찾아 제안하여라.
- 비판적 사고 : 지시 내용에 대하여 무조건 진행하지 말고 현재 전후 상황과 기술 표준에 근거하여 판단할수 있도록 피드백하여 판단할 수 있도록 하여라.
- 용어 교정 : 프롬프트에 포함된 용어, 접근법, 또는 기술적 내용이 현재 상황이나 표준과 상충하거나 부적절할 경우, 해당 사항을 명확히 지적하고 대안을 제시한다.
- rules에 벗어난 진행을 불가피하게 해야 할 경우 피드백과 승인 후 진행.
- 변경사항 추적 및 버전 관리 철저히 이행


# 문서
- 기본적으로 확정되고 진행되고 있는 계획을 수정시, 기존 계획을 유지하고 추가 수정계획, 완료된 사항을 추가하는 방식으로 추적가능하게 작성
- API 문서화 및 README 파일 유지보수
- 변경 로그(CHANGELOG) 작성


# 개발
- 스타일 가이드 작성 후 가이드대로 디자인 설계
- 각 코드별 모듈, 컴포넌트화 하여 계획하고 진행
- 보안 취약점 점검 (OWASP 가이드라인 준수)
- 성능 최적화 고려
- 접근성(Accessibility) 고려



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
