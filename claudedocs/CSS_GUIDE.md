# ePlan CSS Style Guide

## 목차
1. [CSS 구조](#css-구조)
2. [네이밍 컨벤션](#네이밍-컨벤션)
3. [컴포넌트](#컴포넌트)
4. [유틸리티 클래스](#유틸리티-클래스)
5. [반응형 디자인](#반응형-디자인)

## CSS 구조

```
app/static/css/
├── main.css              # 메인 진입점 (모든 CSS import)
├── 01-base/
│   ├── variables.css     # CSS 변수 정의
│   ├── reset.css         # 리셋 스타일
│   └── typography.css    # 타이포그래피
├── 02-layout/
│   ├── header.css        # 헤더/네비게이션
│   ├── footer.css        # 푸터
│   └── grid.css          # 그리드 시스템
├── 03-components/
│   ├── buttons.css       # 버튼
│   ├── cards.css         # 카드
│   ├── forms.css         # 폼
│   ├── tables.css        # 테이블
│   ├── pagination.css    # 페이지네이션
│   ├── modals.css        # 모달
│   ├── accordion.css     # 아코디언
│   └── alerts.css        # 알림
├── 04-pages/
│   └── common.css        # 공통 페이지 스타일
└── 05-utilities/
    └── utilities.css     # 유틸리티 클래스
```

## 네이밍 컨벤션

### BEM (Block Element Modifier)

```css
/* Block: 독립적인 컴포넌트 */
.card { }

/* Element: 블록의 구성 요소 (언더스코어 2개) */
.card__header { }
.card__body { }
.card__footer { }

/* Modifier: 상태나 변형 (하이픈 2개) */
.card--featured { }
.card--large { }
```

### 유틸리티 클래스

```css
/* u- 접두사 사용 */
.u-text-center { }
.u-mt-3 { }
.u-hidden-mobile { }
```

## 컴포넌트

### 버튼

```html
<!-- Primary Button -->
<button class="btn btn--primary">버튼</button>

<!-- Secondary Button -->
<button class="btn btn--secondary">버튼</button>

<!-- Outline Button -->
<button class="btn btn--outline">버튼</button>

<!-- Sizes -->
<button class="btn btn--primary btn--sm">작은 버튼</button>
<button class="btn btn--primary btn--lg">큰 버튼</button>
```

### 카드

```html
<div class="card">
    <div class="card__header">
        <h3 class="card__title">제목</h3>
    </div>
    <div class="card__body">
        내용
    </div>
    <div class="card__footer">
        푸터
    </div>
</div>

<!-- Hoverable Card -->
<div class="card card--hoverable">...</div>
```

### 폼

```html
<form class="form">
    <div class="form__group">
        <label class="form__label">이름</label>
        <input type="text" class="form__input">
    </div>
    
    <div class="form__group">
        <label class="form__label">메시지</label>
        <textarea class="form__textarea"></textarea>
    </div>
    
    <div class="form__actions">
        <button class="btn btn--primary">제출</button>
    </div>
</form>
```

### 모달

```html
<div id="my-modal" class="modal">
    <div class="modal__backdrop"></div>
    <div class="modal__content">
        <div class="modal__header">
            <h3 class="modal__title">제목</h3>
            <button class="modal__close">&times;</button>
        </div>
        <div class="modal__body">
            내용
        </div>
        <div class="modal__footer">
            <button class="btn btn--secondary modal__close">취소</button>
            <button class="btn btn--primary">확인</button>
        </div>
    </div>
</div>

<!-- Trigger Button -->
<button data-modal-target="my-modal">모달 열기</button>
```

### 아코디언

```html
<div class="accordion" data-single>
    <div class="accordion__item">
        <div class="accordion__header">
            <h3 class="accordion__title">질문</h3>
            <span class="accordion__icon">▼</span>
        </div>
        <div class="accordion__content">
            <div class="accordion__body">
                답변
            </div>
        </div>
    </div>
</div>
```

## 유틸리티 클래스

### 간격

```html
<!-- Margin -->
<div class="u-mt-3">상단 여백</div>
<div class="u-mb-4">하단 여백</div>
<div class="u-mx-auto">중앙 정렬</div>

<!-- Padding -->
<div class="u-pt-2">상단 패딩</div>
<div class="u-pb-3">하단 패딩</div>
```

### 텍스트

```html
<div class="u-text-center">중앙 정렬</div>
<div class="u-text-bold">굵게</div>
<div class="u-text-muted">회색 텍스트</div>
```

### 표시/숨김

```html
<div class="u-hidden">숨김</div>
<div class="u-hidden-mobile">모바일에서만 숨김</div>
<div class="u-visible-mobile">모바일에서만 표시</div>
```

## CSS 변수

### 색상

```css
var(--color-teal-dark)      /* #00635C */
var(--color-teal-medium)    /* #63A19B */
var(--color-teal-light)     /* #A9DBDA */
var(--color-orange-warm)    /* #FFB74D */
var(--color-white)          /* #FFFFFF */
var(--color-text-dark)      /* #263238 */
```

### 간격

```css
var(--spacing-xs)    /* 4px */
var(--spacing-sm)    /* 8px */
var(--spacing-md)    /* 16px */
var(--spacing-lg)    /* 24px */
var(--spacing-xl)    /* 32px */
var(--spacing-2xl)   /* 48px */
var(--spacing-3xl)   /* 64px */
```

### 타이포그래피

```css
var(--font-size-sm)    /* 14px */
var(--font-size-md)    /* 16px */
var(--font-size-lg)    /* 18px */
var(--font-size-xl)    /* 20px */
var(--font-size-2xl)   /* 24px */
```

## 반응형 디자인

### 브레이크포인트

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### 미디어 쿼리

```css
/* 모바일 */
@media (max-width: 768px) {
    .header { padding: 10px; }
}

/* 태블릿 */
@media (min-width: 769px) and (max-width: 1024px) {
    .container { max-width: 768px; }
}

/* 데스크톱 */
@media (min-width: 1025px) {
    .container { max-width: 1200px; }
}
```

## 그리드 시스템

```html
<!-- 2 columns -->
<div class="grid grid--2">
    <div>Column 1</div>
    <div>Column 2</div>
</div>

<!-- 3 columns -->
<div class="grid grid--3">
    <div>Column 1</div>
    <div>Column 2</div>
    <div>Column 3</div>
</div>

<!-- Custom gap -->
<div class="grid grid--3 grid--gap-lg">
    ...
</div>
```

## 새로운 컴포넌트 추가

1. `03-components/` 폴더에 새 파일 생성
2. BEM 네이밍 컨벤션 따르기
3. CSS 변수 사용하기
4. `main.css`에 import 추가

```css
/* 03-components/mycomponent.css */
.mycomponent { }
.mycomponent__element { }
.mycomponent--modifier { }
```

```css
/* main.css */
@import url('03-components/mycomponent.css');
```

