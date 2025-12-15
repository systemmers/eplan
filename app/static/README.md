# ePlan Static Assets

정적 자산(CSS, JavaScript, 이미지, 비디오)의 구조와 사용 가이드입니다.

## 디렉토리 구조

```
app/static/
├── css/                    # 스타일시트
│   ├── 01-base/           # 기본 스타일 (변수, 리셋, 타이포그래피)
│   ├── 02-layout/         # 레이아웃 (헤더, 푸터, 그리드)
│   ├── 03-components/     # 재사용 컴포넌트 (버튼, 카드, 모달 등)
│   ├── 04-pages/          # 페이지별 스타일
│   ├── 05-utilities/      # 유틸리티 클래스
│   ├── demo/              # 데모/개발용 스타일
│   └── main.css           # 진입점 (모든 CSS import)
├── js/                     # JavaScript
│   ├── components/        # UI 컴포넌트 (textbook 관련)
│   ├── utils/             # 유틸리티 함수
│   ├── demo/              # 데모/개발용 스크립트
│   └── main.js            # 진입점 (초기화 로직)
├── images/                 # 이미지 자산
└── videos/                 # 비디오 자산
```

## CSS 아키텍처 (SMACSS 기반)

### 01-base/ - 기본 스타일
| 파일 | 설명 |
|------|------|
| `variables.css` | CSS 커스텀 속성 (색상, 간격, 타이포그래피) |
| `reset.css` | 브라우저 기본 스타일 초기화 |
| `typography.css` | 폰트, 제목, 본문 스타일 |

### 02-layout/ - 레이아웃
| 파일 | 설명 |
|------|------|
| `header.css` | 네비게이션, 헤더 스타일 |
| `footer.css` | 푸터 스타일 |
| `grid.css` | 그리드 시스템, 컨테이너 |

### 03-components/ - 재사용 컴포넌트
| 파일 | 설명 | 사용 예시 |
|------|------|----------|
| `buttons.css` | 버튼 스타일 | `.btn`, `.btn--primary` |
| `cards.css` | 카드 컴포넌트 | `.card`, `.card--elevated` |
| `modals.css` | 모달 다이얼로그 | `.modal`, `.modal-content` |
| `accordion.css` | 아코디언 컴포넌트 | `.accordion`, `.accordion-item` |
| `curriculum-table.css` | 커리큘럼 테이블 | `.curriculum-table` |
| `textbook-*.css` | 교재 갤러리/캐러셀/아코디언/모달 | `.textbook-*` |

### 04-pages/ - 페이지별 스타일
각 페이지의 고유한 스타일을 포함합니다.
| 파일 | 페이지 |
|------|--------|
| `home.css` | 메인 홈페이지 |
| `company.css` | 회사소개 |
| `phone-english.css` | 전화영어 |
| `corporate.css` | 기업출강 |
| `writing.css` | Writing 첨삭 |

### 05-utilities/ - 유틸리티
| 파일 | 설명 |
|------|------|
| `utilities.css` | 헬퍼 클래스 (마진, 패딩, 텍스트 정렬 등) |

### demo/ - 데모 전용
개발/미리보기용 스타일로, 프로덕션 페이지에는 영향 없음
| 파일 | 설명 |
|------|------|
| `demo-common.css` | 데모 페이지 공통 스타일 |
| `curriculum-demo.css` | 커리큘럼 로드맵 데모 스타일 |

## JavaScript 구조

### 진입점
- `main.js`: 애플리케이션 초기화 로직
  - DOMContentLoaded에서 모든 컴포넌트 초기화
  - HTMX afterSwap 이벤트에서 컴포넌트 재초기화

### components/
교재(textbook) 관련 UI 컴포넌트
| 파일 | 설명 |
|------|------|
| `textbook-accordion.js` | 교재 아코디언 컴포넌트 |
| `textbook-modal.js` | 교재 모달 컴포넌트 |
| `textbook-slider.js` | 교재 이미지 슬라이더 |
| `carousel.js` | 캐러셀 컴포넌트 |

### utils/
| 파일 | 설명 |
|------|------|
| `navigation.js` | 네비게이션 유틸리티 |

### 기타 스크립트
| 파일 | 설명 |
|------|------|
| `textbookData.js` | 교재 데이터 및 헬퍼 함수 |
| `curriculum.js` | 커리큘럼 테이블 인터랙션 |
| `parallax.js` | 패럴랙스 효과 |
| `circular-gallery.js` | 원형 갤러리 컴포넌트 |

## 네이밍 규칙

### CSS
- **클래스명**: BEM 방식 (`block__element--modifier`)
- **CSS 변수**: `--category-name` (예: `--color-teal-dark`)
- **파일명**: kebab-case (예: `phone-english.css`)

### JavaScript
- **함수명**: camelCase (예: `initTextbookComponents`)
- **클래스명**: PascalCase (예: `TextbookCarousel`)
- **파일명**: kebab-case 또는 camelCase

## CSS 변수 시스템

### 색상
```css
/* 메인 (Teal) */
--color-teal-lightest: #C0EFED;
--color-teal-light: #A9DBDA;
--color-teal-medium: #63A19B;
--color-teal-dark: #00635C;

/* 서브 */
--color-orange-warm: #FFB74D;
--color-orange-coral: #FF8A65;

/* 중성 */
--color-text-dark: #263238;
--color-text-muted: #90A4AE;
--color-bg-white: #FAFAFA;
```

### 간격
```css
--spacing-xs: 0.25rem;   /* 4px */
--spacing-sm: 0.5rem;    /* 8px */
--spacing-md: 1rem;      /* 16px */
--spacing-lg: 1.5rem;    /* 24px */
--spacing-xl: 2rem;      /* 32px */
--spacing-2xl: 3rem;     /* 48px */
```

### 타이포그래피
```css
--font-family-base: 'Open Sans', sans-serif;
--font-family-heading: 'Poppins', sans-serif;

--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

## 컴포넌트 사용 예시

### 버튼
```html
<button class="btn btn--primary">기본 버튼</button>
<button class="btn btn--outline">아웃라인</button>
```

### 카드
```html
<div class="card">
    <div class="card__header">제목</div>
    <div class="card__body">내용</div>
</div>
```

### 섹션 타이틀
```html
<h2 class="section-title-1">섹션 제목</h2>
```

## HTMX 통합

페이지 전환 시 컴포넌트 재초기화:
```javascript
document.body.addEventListener('htmx:afterSwap', function(event) {
    if (event.detail.target.id === 'main-content') {
        initPageComponents();
    }
});
```

## 개발 가이드라인

1. **새 컴포넌트 추가 시**
   - `03-components/`에 CSS 파일 생성
   - `main.css`에 import 추가
   - BEM 네이밍 규칙 준수

2. **새 페이지 스타일 추가 시**
   - `04-pages/`에 CSS 파일 생성
   - `main.css`에 import 추가

3. **새 JS 컴포넌트 추가 시**
   - `components/` 또는 `utils/`에 파일 생성
   - `base.html`에 script 태그 추가
   - `main.js`에서 초기화 함수 호출

4. **CSS 변수 사용**
   - 색상, 간격, 폰트는 반드시 변수 사용
   - 하드코딩된 값 사용 금지

## 최근 변경사항

### 2024-12 리팩토링
- JS 컴포넌트 파일 정리 (textbook-* prefix)
- CSS 데모 스타일 분리 (phone-english.css → curriculum-demo.css)
- CSS 변수 정규화 (--font-weight-semibold 추가)
- .gitignore 백업 파일 패턴 추가
