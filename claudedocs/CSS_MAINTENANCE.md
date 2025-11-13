# CSS 유지보수 가이드

날짜: 2025-11-05

## 완료된 작업

### 1. CSS 모듈화
기존 `style.css`를 삭제하고 새로운 모듈화 구조로 전환했습니다.

```
app/static/css/
├── main.css (진입점)
├── 01-base/
│   ├── variables.css    # CSS 변수 정의
│   ├── reset.css        # 리셋 스타일
│   └── typography.css   # 타이포그래피
├── 02-layout/
│   ├── header.css       # 헤더 레이아웃
│   ├── footer.css       # 푸터 레이아웃
│   └── grid.css         # 그리드 시스템
├── 03-components/
│   ├── buttons.css      # 버튼 컴포넌트
│   ├── cards.css        # 카드 컴포넌트
│   ├── forms.css        # 폼 컴포넌트
│   ├── tables.css       # 테이블 컴포넌트
│   ├── pagination.css   # 페이지네이션
│   ├── modals.css       # 모달
│   ├── accordion.css    # 아코디언
│   └── alerts.css       # 알럿
├── 04-pages/
│   ├── common.css       # 공통 페이지 스타일
│   ├── home.css         # 홈 페이지
│   ├── company.css      # 회사소개
│   ├── phone-english.css # 전화영어
│   ├── board.css        # 게시판
│   └── admin.css        # 관리자
└── 05-utilities/
    └── utilities.css    # 유틸리티 클래스
```

### 2. BEM 네이밍 적용
- Block: `.card`, `.form`, `.btn`
- Element: `.card__body`, `.form__input`, `.btn--primary`
- Modifier: `.card--hoverable`, `.btn--lg`

### 3. 업데이트된 템플릿
- ✅ `base.html` - 네비게이션, 헤더, 푸터
- ✅ `index.html` - 홈페이지
- ✅ `company/index.html` - 회사소개
- ✅ `phone_english/index.html` - 전화영어
- ✅ `corporate/index.html` - 기업출강
- ✅ `writing/index.html` - Writing 첨삭
- ✅ `consulting/index.html` - 컨설팅 문의
- ✅ `instructors/index.html` - 강사 지원
- ✅ `board/list.html` - 게시판 목록
- ✅ `board/detail.html` - 게시판 상세
- ✅ `auth/login.html` - 로그인
- ✅ `admin/dashboard.html` - 관리자 대시보드
- ✅ `admin/posts.html` - 게시글 관리
- ✅ `admin/post_form.html` - 게시글 작성/수정

### 4. 주요 CSS 클래스 변경

#### 버튼
```
기존 → 새로운
btn-primary    → btn--primary
btn-secondary  → btn--secondary
btn-danger     → btn--danger
btn-lg         → btn--lg
btn-sm         → btn--sm
btn-block      → btn--block
```

#### 폼
```
기존 → 새로운
form-group     → form__group
form-control   → form__input
form-label     → form__label
form-error     → form__error
```

#### 그리드
```
새로운 유틸리티 클래스:
grid grid--2    # 2컬럼 그리드
grid grid--3    # 3컬럼 그리드
grid grid--4    # 4컬럼 그리드
```

#### 유틸리티
```
u-text-center   # 텍스트 중앙정렬
u-mb-4          # margin-bottom
u-mt-3          # margin-top
u-bg-teal       # teal 배경색
u-mx-auto       # 좌우 margin auto
```

## 유지보수 지침

### 새 페이지 추가 시
1. `04-pages/` 에 새 CSS 파일 생성
2. `main.css`에 import 추가
3. BEM 네이밍 규칙 준수

### 새 컴포넌트 추가 시
1. `03-components/` 에 새 CSS 파일 생성
2. `main.css`에 import 추가
3. BEM 네이밍으로 클래스 정의

### CSS 변수 사용
색상, 간격, 폰트 등은 `01-base/variables.css`에 정의된 변수 사용:
```css
var(--color-teal-dark)
var(--spacing-md)
var(--font-size-lg)
var(--border-radius-md)
```

### 반응형 디자인
- 모바일 우선 접근
- 768px 브레이크포인트 사용
- 미디어 쿼리는 각 컴포넌트 파일 내 작성

## 참고
- 전체 CSS 가이드: `CSS_GUIDE.md`
- 프로젝트 구조: `planning/structure.md`

