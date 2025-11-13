# eplan 라우트 및 엔드포인트 참조

생성일: 2025-01-26

## 1. 라우트 개요

### 1.1 Blueprint별 라우트 분류

| Blueprint | URL Prefix | 라우트 수 | 보호 여부 |
|-----------|------------|-----------|----------|
| main | 없음 | 11 | 없음 |
| auth | /auth | 2 | 없음 |
| admin | /admin | 5 | @login_required |

**총 라우트 수**: 18개

## 2. main Blueprint 라우트

### 2.1 공개 페이지

#### GET /
**함수**: `index()`
**템플릿**: `index.html`
**설명**: 메인 랜딩 페이지
**데이터**:
- `notice_count`: 공지사항 게시글 수
- `news_count`: 뉴스 게시글 수
- `english_count`: 영어 게시글 수
- `japanese_count`: 일본어 게시글 수
- `chinese_count`: 중국어 게시글 수

#### GET /company
**함수**: `company()`
**템플릿**: `company/index.html`
**설명**: 회사소개 페이지
**데이터**: 없음 (정적 콘텐츠)

#### GET /phone-english
**함수**: `phone_english()`
**템플릿**: `phone_english/index.html`
**설명**: 전화영어 소개 페이지
**데이터**: 없음 (정적 콘텐츠)

#### GET /phone-english/<curriculum>
**함수**: `phone_english_detail(curriculum)`
**템플릿**: `phone_english/{curriculum}.html`
**파라미터**:
- `curriculum`: 'general-conversation', 'business-conversation', 'discussion', 'test-prep'
**설명**: 전화영어 커리큘럼 상세 페이지
**유효성 검사**: curriculum이 유효하지 않으면 404 에러
**데이터**: 없음 (정적 콘텐츠)

#### GET /corporate-programs
**함수**: `corporate_programs()`
**템플릿**: `corporate/index.html`
**설명**: 기업출강 프로그램 소개 페이지
**데이터**: 없음 (정적 콘텐츠)

#### GET /corporate-programs/<program>
**함수**: `corporate_program_detail(program)`
**템플릿**: `corporate/{program}.html`
**파라미터**:
- `program`: 'in-house', 'intensive', 'executive', 'resident', 'blended', 'oct'
**설명**: 기업출강 프로그램 상세 페이지
**유효성 검사**: program이 유효하지 않으면 404 에러
**데이터**: 없음 (정적 콘텐츠)

#### GET /writing-correction
**함수**: `writing_correction()`
**템플릿**: `writing/index.html`
**설명**: Writing 첨삭 페이지
**데이터**: 없음 (정적 콘텐츠)

### 2.2 폼 제출 페이지

#### GET/POST /consulting
**함수**: `consulting()`
**템플릿**: `consulting/index.html`
**설명**: 컨설팅 문의 폼 페이지
**GET 요청**:
- 폼 표시
- `form`: ConsultingForm 인스턴스

**POST 요청**:
- 폼 검증
- ConsultingInquiry 모델 생성 및 저장
- Flash 메시지: '문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.'
- 리다이렉트: `/consulting`

**폼 필드**:
- `company_name`: 회사명 (필수, 최대 200자)
- `name`: 담당자 이름 (필수, 최대 100자)
- `email`: 이메일 (필수, 이메일 형식)
- `phone`: 전화번호 (필수, 최대 20자)
- `interested_courses`: 관심 프로그램 (선택)
- `message`: 기타 요청사항 (선택)

#### GET/POST /for-instructors
**함수**: `for_instructors()`
**템플릿**: `instructors/index.html`
**설명**: 강사 지원 폼 페이지
**GET 요청**:
- 폼 표시
- `form`: InstructorApplicationForm 인스턴스

**POST 요청**:
- 폼 검증
- InstructorApplication 모델 생성 및 저장
- Flash 메시지: '지원서가 제출되었습니다. 검토 후 연락드리겠습니다.'
- 리다이렉트: `/for-instructors`

**폼 필드**:
- `name`: 이름 (필수, 최대 100자)
- `email`: 이메일 (필수, 이메일 형식)
- `phone`: 전화번호 (필수, 최대 20자)
- `education`: 학력 (필수)
- `experience`: 교육 경력 (필수)
- `certificates`: 보유 자격증 (선택)
- `motivation`: 지원 동기 (필수)

### 2.3 게시판 페이지

#### GET /board/<category>
**함수**: `board_list(category)`
**템플릿**: `board/list.html`
**파라미터**:
- `category`: 카테고리 slug ('notice', 'news', 'english', 'japanese', 'chinese')
**쿼리 파라미터**:
- `page`: 페이지 번호 (기본값: 1)
**설명**: 게시판 목록 페이지 (페이지네이션)
**데이터**:
- `category`: Category 객체
- `posts`: Post 객체 리스트 (페이지네이션된 항목)
- `pagination`: Pagination 객체
**페이지네이션**: `POSTS_PER_PAGE` 설정값 사용 (기본: 10)

#### GET /board/<category>/<post_id>
**함수**: `board_detail(category, post_id)`
**템플릿**: `board/detail.html`
**파라미터**:
- `category`: 카테고리 slug
- `post_id`: 게시글 ID (정수)
**설명**: 게시글 상세 페이지
**기능**:
- 조회수 자동 증가
- 이전글/다음글 조회
**데이터**:
- `category`: Category 객체
- `post`: Post 객체
- `prev_post`: 이전 Post 객체 (없으면 None)
- `next_post`: 다음 Post 객체 (없으면 None)
**필터**: `is_published=True`인 게시글만 표시

## 3. auth Blueprint 라우트

### 3.1 인증 라우트

#### GET/POST /auth/login
**함수**: `login()`
**템플릿**: `auth/login.html`
**설명**: 로그인 페이지
**GET 요청**:
- 이미 로그인된 경우 `/admin`으로 리다이렉트
- 폼 표시
- `form`: LoginForm 인스턴스

**POST 요청**:
- 폼 검증
- 사용자 인증 (username, password)
- 로그인 성공:
  - `login_user()` 호출
  - Remember me 옵션 적용
  - Flash 메시지: '로그인에 성공했습니다.'
  - 리다이렉트: `next` 파라미터 또는 `/admin`
- 로그인 실패:
  - Flash 메시지: '사용자명 또는 비밀번호가 올바르지 않습니다.'
  - 폼 재표시

**폼 필드**:
- `username`: 사용자명 (필수, 최대 80자)
- `password`: 비밀번호 (필수)
- `remember_me`: 로그인 상태 유지 (체크박스)

**보안**:
- `next` 파라미터 검증 (절대 경로만 허용)

#### GET /auth/logout
**함수**: `logout()`
**템플릿**: 없음 (리다이렉트)
**설명**: 로그아웃
**기능**:
- `logout_user()` 호출
- Flash 메시지: '로그아웃되었습니다.'
- 리다이렉트: `/` (메인 페이지)

## 4. admin Blueprint 라우트

**모든 라우트는 `@login_required` 데코레이터로 보호됨**

### 4.1 대시보드

#### GET /admin/
**함수**: `dashboard()`
**템플릿**: `admin/dashboard.html`
**설명**: 관리자 대시보드
**데이터**:
- `total_posts`: 전체 게시글 수
- `category_stats`: 카테고리별 게시글 수 (딕셔너리)
- `recent_posts`: 최근 게시글 10개

### 4.2 게시글 관리

#### GET /admin/posts
**함수**: `posts()`
**템플릿**: `admin/posts.html`
**설명**: 게시글 목록 (관리자용)
**쿼리 파라미터**:
- `page`: 페이지 번호 (기본값: 1)
**데이터**:
- `posts`: Post 객체 리스트 (페이지네이션된 항목)
- `pagination`: Pagination 객체
**필터**: 없음 (모든 게시글 표시, 게시/비게시 구분 없음)

#### GET/POST /admin/posts/new
**함수**: `new_post()`
**템플릿**: `admin/post_form.html`
**설명**: 새 게시글 작성
**GET 요청**:
- 폼 표시
- `form`: PostForm 인스턴스 (카테고리 선택지 포함)
- `title`: '새 게시글 작성'

**POST 요청**:
- 폼 검증
- Post 모델 생성 및 저장
- `author_id`: 현재 로그인한 사용자 ID
- Flash 메시지: '게시글이 작성되었습니다.'
- 리다이렉트: `/admin/posts`

**폼 필드**:
- `title`: 제목 (필수, 최대 200자)
- `content`: 내용 (필수)
- `category_id`: 카테고리 ID (필수, SelectField)
- `is_published`: 게시 여부 (체크박스, 기본값: True)

#### GET/POST /admin/posts/<post_id>/edit
**함수**: `edit_post(post_id)`
**템플릿**: `admin/post_form.html`
**파라미터**:
- `post_id`: 게시글 ID (정수)
**설명**: 게시글 수정
**GET 요청**:
- 게시글 조회 (404 에러 처리)
- 폼에 기존 데이터 채움
- `form`: PostForm 인스턴스 (기존 데이터 포함)
- `post`: Post 객체
- `title`: '게시글 수정'

**POST 요청**:
- 폼 검증
- 게시글 데이터 업데이트
- Flash 메시지: '게시글이 수정되었습니다.'
- 리다이렉트: `/admin/posts`

**폼 필드**: `new_post()`와 동일

#### POST /admin/posts/<post_id>/delete
**함수**: `delete_post(post_id)`
**템플릿**: 없음 (리다이렉트)
**파라미터**:
- `post_id`: 게시글 ID (정수)
**설명**: 게시글 삭제
**기능**:
- 게시글 조회 (404 에러 처리)
- 게시글 삭제
- Flash 메시지: '게시글이 삭제되었습니다.'
- 리다이렉트: `/admin/posts`

**주의**: GET 메서드 지원 안 함 (POST만 허용)

## 5. 라우트 요약 테이블

### 5.1 공개 라우트

| 메서드 | 경로 | 함수 | 설명 |
|--------|------|------|------|
| GET | / | index | 메인 페이지 |
| GET | /company | company | 회사소개 |
| GET | /phone-english | phone_english | 전화영어 소개 |
| GET | /phone-english/<curriculum> | phone_english_detail | 전화영어 상세 |
| GET | /corporate-programs | corporate_programs | 기업출강 소개 |
| GET | /corporate-programs/<program> | corporate_program_detail | 기업출강 상세 |
| GET | /writing-correction | writing_correction | Writing 첨삭 |
| GET/POST | /consulting | consulting | 컨설팅 문의 |
| GET/POST | /for-instructors | for_instructors | 강사 지원 |
| GET | /board/<category> | board_list | 게시판 목록 |
| GET | /board/<category>/<post_id> | board_detail | 게시글 상세 |

### 5.2 인증 라우트

| 메서드 | 경로 | 함수 | 설명 |
|--------|------|------|------|
| GET/POST | /auth/login | login | 로그인 |
| GET | /auth/logout | logout | 로그아웃 |

### 5.3 관리자 라우트

| 메서드 | 경로 | 함수 | 설명 | 보호 |
|--------|------|------|------|------|
| GET | /admin/ | dashboard | 대시보드 | @login_required |
| GET | /admin/posts | posts | 게시글 목록 | @login_required |
| GET/POST | /admin/posts/new | new_post | 게시글 작성 | @login_required |
| GET/POST | /admin/posts/<id>/edit | edit_post | 게시글 수정 | @login_required |
| POST | /admin/posts/<id>/delete | delete_post | 게시글 삭제 | @login_required |

## 6. URL 생성 참조

### 6.1 Flask url_for() 사용법

```python
# main Blueprint
url_for('main.index')
url_for('main.company')
url_for('main.phone_english_detail', curriculum='general-conversation')
url_for('main.board_list', category='notice')
url_for('main.board_detail', category='notice', post_id=1)

# auth Blueprint
url_for('auth.login')
url_for('auth.logout')

# admin Blueprint
url_for('admin.dashboard')
url_for('admin.posts')
url_for('admin.new_post')
url_for('admin.edit_post', post_id=1)
url_for('admin.delete_post', post_id=1)
```

### 6.2 템플릿에서 사용

```jinja2
{{ url_for('main.index') }}
{{ url_for('main.board_list', category='notice') }}
{{ url_for('admin.dashboard') }}
```

## 7. 에러 처리

### 7.1 404 에러
- 유효하지 않은 curriculum: `phone_english_detail()`
- 유효하지 않은 program: `corporate_program_detail()`
- 존재하지 않는 카테고리: `board_list()`
- 존재하지 않는 게시글: `board_detail()`, `edit_post()`, `delete_post()`

### 7.2 폼 검증 에러
- 모든 POST 라우트에서 폼 검증 실패 시 폼 재표시
- 에러 메시지는 WTForms가 자동으로 처리

## 8. 리다이렉트 플로우

### 8.1 인증 플로우
```
로그인 필요 페이지 접근
  ↓
/auth/login?next=/admin/posts
  ↓
로그인 성공
  ↓
/admin/posts (next 파라미터로 리다이렉트)
```

### 8.2 폼 제출 플로우
```
/consulting (GET) → 폼 표시
  ↓
/consulting (POST) → 폼 제출
  ↓
검증 성공 → 데이터 저장
  ↓
/consulting (GET) → Flash 메시지와 함께 리다이렉트
```

## 9. 페이지네이션

### 9.1 페이지네이션 사용 라우트
- `/board/<category>`: 게시판 목록
- `/admin/posts`: 관리자 게시글 목록

### 9.2 페이지네이션 설정
- `POSTS_PER_PAGE`: 10 (config.py에서 설정)
- 쿼리 파라미터: `?page=1`, `?page=2`, ...

### 9.3 템플릿에서 사용
```jinja2
{% if pagination.has_prev %}
  <a href="{{ url_for('main.board_list', category=category.slug, page=pagination.prev_num) }}">이전</a>
{% endif %}

{{ pagination.page }} / {{ pagination.pages }}

{% if pagination.has_next %}
  <a href="{{ url_for('main.board_list', category=category.slug, page=pagination.next_num) }}">다음</a>
{% endif %}
```

## 10. Flash 메시지

### 10.1 Flash 메시지 사용 라우트
- `/auth/login`: 로그인 성공/실패
- `/auth/logout`: 로그아웃 완료
- `/consulting`: 문의 접수 완료
- `/for-instructors`: 지원서 제출 완료
- `/admin/posts/new`: 게시글 작성 완료
- `/admin/posts/<id>/edit`: 게시글 수정 완료
- `/admin/posts/<id>/delete`: 게시글 삭제 완료

### 10.2 Flash 메시지 카테고리
- `success`: 성공 메시지
- `danger`: 에러 메시지
- `info`: 정보 메시지

### 10.3 템플릿에서 표시
```jinja2
{% with messages = get_flashed_messages(with_categories=true) %}
  {% for category, message in messages %}
    <div class="alert alert-{{ category }}">{{ message }}</div>
  {% endfor %}
{% endwith %}
```

