# Figma 디자인 명세서 - 전화외국어 섹션

**프로젝트명**: ePlan 전화외국어 섹션 웹사이트 디자인
**버전**: 1.0
**작성일**: 2025-01-13
**페이지 수**: 5개 페이지

---

## 📁 Figma 파일 구조

### Figma 프로젝트 구성
```
ePlan - 전화외국어 섹션
│
├── 📄 Cover (표지)
│
├── 🎨 Design System
│   ├── Colors (색상)
│   ├── Typography (타이포그래피)
│   ├── Spacing (간격)
│   ├── Icons (아이콘)
│   └── Components (컴포넌트 라이브러리)
│
├── 📱 Pages (페이지 디자인)
│   ├── 1. 전화외국어 과정소개 (메인)
│   ├── 2. 일반회화 상세
│   ├── 3. 비즈니스회화 상세
│   ├── 4. 토론과정 상세
│   └── 5. 공인테스트대비 상세
│
├── 📐 Wireframes (와이어프레임)
│   ├── Desktop Wireframes
│   ├── Tablet Wireframes
│   └── Mobile Wireframes
│
└── 📋 Prototypes (프로토타입)
    └── Interactive Prototype
```

---

## 🎨 DESIGN SYSTEM

### 1. Colors (색상 팔레트)

#### Figma에서 생성할 Color Styles

**Primary Colors (주색상)**
```
Name: Primary/Yellow
HEX: #FFD700
RGB: 255, 215, 0
사용: 제목 박스, CTA 버튼, 강조 요소

Name: Primary/Yellow Light
HEX: #FFF9E6
RGB: 255, 249, 230
사용: 배경, 섹션 구분

Name: Primary/Yellow Dark
HEX: #F4C430
RGB: 244, 196, 48
사용: 호버 상태, Active 상태
```

**Accent Colors (강조색)**
```
Name: Accent/Green
HEX: #4CAF50
RGB: 76, 175, 80
사용: CTA 버튼, 성공 메시지

Name: Accent/Blue
HEX: #2196F3
RGB: 33, 150, 243
사용: 링크, 정보 표시

Name: Accent/Orange
HEX: #FF9800
RGB: 255, 152, 0
사용: 경고, 중요 알림
```

**Neutral Colors (중립색)**
```
Name: Neutral/Dark
HEX: #333333
RGB: 51, 51, 51
사용: 메인 텍스트

Name: Neutral/Medium
HEX: #666666
RGB: 102, 102, 102
사용: 보조 텍스트

Name: Neutral/Light Gray
HEX: #F5F5F5
RGB: 245, 245, 245
사용: 배경

Name: Neutral/White
HEX: #FFFFFF
RGB: 255, 255, 255
사용: 카드 배경, 컨텐츠 영역
```

---

### 2. Typography (타이포그래피)

#### Figma에서 생성할 Text Styles

**한글 폰트: Noto Sans KR**

```
Style Name: Heading/H1
Font: Noto Sans KR Bold (700)
Size: 40px
Line Height: 56px (140%)
Letter Spacing: -0.5px
Color: #333333

Style Name: Heading/H2
Font: Noto Sans KR Bold (700)
Size: 32px
Line Height: 44px (137.5%)
Letter Spacing: -0.3px
Color: #333333

Style Name: Heading/H3
Font: Noto Sans KR Semi Bold (600)
Size: 24px
Line Height: 32px (133%)
Letter Spacing: 0px
Color: #333333

Style Name: Body/Large
Font: Noto Sans KR Regular (400)
Size: 18px
Line Height: 28px (155%)
Letter Spacing: 0px
Color: #666666

Style Name: Body/Regular
Font: Noto Sans KR Regular (400)
Size: 16px
Line Height: 26px (162.5%)
Letter Spacing: 0px
Color: #666666

Style Name: Body/Small
Font: Noto Sans KR Regular (400)
Size: 14px
Line Height: 22px (157%)
Letter Spacing: 0px
Color: #999999

Style Name: Caption
Font: Noto Sans KR Regular (400)
Size: 12px
Line Height: 18px (150%)
Letter Spacing: 0px
Color: #999999
```

**영문 폰트: Montserrat / Roboto**

```
Style Name: Heading/English
Font: Montserrat Bold (700)
Size: 32px
Line Height: 44px
Color: #333333

Style Name: Body/English
Font: Roboto Regular (400)
Size: 16px
Line Height: 26px
Color: #666666
```

---

### 3. Spacing (간격 시스템)

#### Figma에서 사용할 Spacing Values

```
4px 단위 기반 시스템

XS: 4px
S: 8px
M: 16px
L: 24px
XL: 32px
XXL: 48px
XXXL: 64px
XXXXL: 96px
```

#### 사용 가이드
- 아이콘 간격: XS (4px)
- 텍스트 행간: S (8px)
- 요소 간 기본 간격: M (16px)
- 섹션 내부 간격: L (24px)
- 컴포넌트 간 간격: XL (32px)
- 섹션 간 간격: XXL (48px)
- 주요 섹션 구분: XXXL (64px)

---

### 4. Grid System (그리드 시스템)

#### Desktop Grid (1200px 기준)
```
Figma Grid Settings:
- Type: Columns
- Count: 12
- Gutter: 24px
- Margin: 48px (양쪽)
- Width: 1200px (max-width)
- Alignment: Center
```

#### Tablet Grid (768px 기준)
```
- Type: Columns
- Count: 8
- Gutter: 16px
- Margin: 24px
```

#### Mobile Grid (375px 기준)
```
- Type: Columns
- Count: 4
- Gutter: 12px
- Margin: 16px
```

---

### 5. Effects (효과)

#### Figma에서 생성할 Effect Styles

**Shadows (그림자)**
```
Name: Shadow/Card
Type: Drop Shadow
X: 0, Y: 2
Blur: 8
Spread: 0
Color: #000000, 10% opacity

Name: Shadow/Card Hover
Type: Drop Shadow
X: 0, Y: 4
Blur: 16
Spread: 0
Color: #000000, 15% opacity

Name: Shadow/Button
Type: Drop Shadow
X: 0, Y: 1
Blur: 4
Spread: 0
Color: #000000, 15% opacity
```

**Blur (흐림 효과)**
```
Name: Blur/Background
Type: Background Blur
Blur: 10
```

---

## 🧩 COMPONENT LIBRARY

### Component 1: Button (버튼)

#### Primary Button
```
Figma Component Structure:
├── Frame: Button/Primary
│   ├── Size: 48px height (default)
│   ├── Padding: 16px (top/bottom), 32px (left/right)
│   ├── Border Radius: 4px
│   ├── Background: #FFD700
│   └── Text: Body/Regular, #333333

Variants:
- Size: Small (40px), Medium (48px), Large (56px)
- State: Default, Hover, Active, Disabled

Hover State:
- Background: #F4C430
- Transform: translateY(-2px)
- Shadow: Shadow/Button

Auto Layout:
- Horizontal padding: 32px
- Vertical padding: 16px
- Gap: 8px (if icon present)
```

#### Secondary Button
```
Frame: Button/Secondary
- Background: Transparent
- Border: 2px solid #FFD700
- Text: #FFD700

Hover:
- Background: #FFF9E6
- Border: 2px solid #F4C430
```

---

### Component 2: Card (카드)

#### Course Card (과정 카드)
```
Frame: Card/Course
├── Width: 400px (flexible)
├── Height: 500px (auto-layout)
├── Background: #FFFFFF
├── Border Radius: 8px
├── Padding: 0px
├── Shadow: Shadow/Card
│
├── Image Container (60% height)
│   ├── Width: 100%
│   ├── Height: 300px
│   ├── Border Radius: 8px 8px 0 0
│   └── Image: Fill
│
└── Content Container (40% height)
    ├── Padding: 24px
    ├── Auto Layout: Vertical
    ├── Gap: 12px
    │
    ├── Title
    │   ├── Text: Heading/H3
    │   └── Color: #333333
    │
    ├── Subtitle (English)
    │   ├── Text: Body/English
    │   └── Color: #666666
    │
    ├── Description
    │   ├── Text: Body/Regular
    │   └── Bullets: 4 items
    │
    └── CTA Link
        ├── Text: "자세히 보기 →"
        ├── Color: #FFD700
        └── Hover: Underline

Hover State:
- Shadow: Shadow/Card Hover
- Transform: translateY(-4px)
- Transition: 0.3s ease
```

---

### Component 3: Hero Section (히어로 섹션)

```
Frame: Hero/Section
├── Width: 1920px (full width)
├── Height: 60vh (viewport height)
├── Position: Relative
│
├── Background Image
│   ├── Fill: Image
│   ├── Opacity: 80%
│   └── Overlay: Linear Gradient (0deg, rgba(0,0,0,0.3) 0%, transparent 100%)
│
└── Content Container
    ├── Position: Absolute Center
    ├── Max Width: 800px
    ├── Alignment: Center
    ├── Gap: 24px
    │
    ├── Title Box
    │   ├── Background: #FFD700
    │   ├── Padding: 16px 32px
    │   ├── Border Radius: 4px
    │   ├── Text: Heading/H1
    │   └── Color: #333333
    │
    ├── Subtitle
    │   ├── Text: Heading/English
    │   ├── Color: #FFFFFF
    │   └── Text Shadow: 0 2px 4px rgba(0,0,0,0.5)
    │
    └── Description
        ├── Text: Body/Large
        ├── Color: #FFFFFF
        ├── Max Width: 600px
        └── Text Shadow: 0 1px 2px rgba(0,0,0,0.5)
```

---

### Component 4: Level Chart (레벨 차트)

```
Frame: Level/Chart
├── Width: 100% (1200px max)
├── Height: Auto
├── Auto Layout: Vertical
├── Gap: 16px
│
├── Title
│   ├── Text: "학습 레벨 (Level 1~9)"
│   └── Style: Heading/H3
│
├── Chart Container
│   ├── Auto Layout: Horizontal
│   ├── Gap: 4px
│   ├── Width: 100%
│   │
│   └── Level Blocks (9개)
│       ├── Width: Fill (flexible)
│       ├── Height: 80px
│       ├── Border Radius: 4px
│       ├── Background: Gradient (#FFF9E6 → #FFD700)
│       ├── Padding: 12px
│       │
│       ├── Level Number
│       │   ├── Text: "L1"
│       │   ├── Font: Bold
│       │   └── Size: 20px
│       │
│       └── Hover State
│           ├── Scale: 1.05
│           └── Shadow: Shadow/Card
│
└── Legend Container
    ├── Auto Layout: Horizontal
    ├── Gap: 24px
    │
    ├── Beginner (L1-3)
    ├── Pre-intermediate (L4-6)
    └── Intermediate (L7-9)
```

---

### Component 5: Textbook Card (교재 카드)

```
Frame: Card/Textbook
├── Width: 300px
├── Height: 450px
├── Auto Layout: Vertical
├── Gap: 16px
├── Padding: 16px
├── Background: #FFFFFF
├── Border Radius: 8px
├── Shadow: Shadow/Card
│
├── Image Container
│   ├── Width: 268px
│   ├── Height: 350px
│   ├── Border Radius: 4px
│   └── Image: Book Cover
│
├── Title
│   ├── Text: Heading/H3
│   └── Font Size: 20px
│
├── Level Badge
│   ├── Background: #FFD700
│   ├── Padding: 4px 12px
│   ├── Border Radius: 12px
│   └── Text: "Level 1-3"
│
└── Description
    ├── Text: Body/Small
    └── Max Lines: 2
```

---

### Component 6: Tab Component (탭)

```
Frame: Tab/Container
├── Width: 100%
├── Auto Layout: Vertical
├── Gap: 0px
│
├── Tab List
│   ├── Auto Layout: Horizontal
│   ├── Gap: 0px
│   │
│   └── Tab Item (3개)
│       ├── Padding: 16px 24px
│       ├── Border Bottom: 2px solid transparent
│       ├── Text: Body/Regular
│       ├── Color: #666666
│       │
│       ├── Active State
│       │   ├── Border Bottom: 2px solid #FFD700
│       │   ├── Text Color: #333333
│       │   └── Background: #FFF9E6
│       │
│       └── Hover State
│           └── Background: #F5F5F5
│
└── Tab Panel
    ├── Padding: 32px
    ├── Background: #FFFFFF
    └── Content: Varies
```

---

### Component 7: Icon Set (아이콘)

#### 필요한 아이콘 목록 (64px x 64px)
```
Icons/Education
- 문법 아이콘 (Grammar)
- 대화 아이콘 (Conversation)
- 발음 아이콘 (Pronunciation)
- 스킬 아이콘 (Skills)

Icons/Business
- 회의 아이콘 (Meetings)
- 프레젠테이션 아이콘 (Presentation)
- 협상 아이콘 (Negotiating)
- 이메일 아이콘 (Emails)

Icons/Test
- 시험 아이콘 (Test)
- 레벨업 아이콘 (Level Up)
- 목표 아이콘 (Target)

Icons/UI
- 화살표 (Arrow Right)
- 체크마크 (Checkmark)
- 다운로드 (Download)
- 외부링크 (External Link)
```

**아이콘 스타일 가이드**
- 스타일: Line Icon (2px stroke)
- 색상: #FFD700 (Primary), #666666 (Secondary)
- 크기: 64px x 64px (원본), 24px, 32px, 48px (variants)
- 배경: 원형 또는 없음

---

## 📄 PAGE DESIGNS

### Page 1: 전화외국어 과정소개 (메인)

#### Figma Frame 구조
```
Frame: Desktop/1200px
├── Width: 1920px
├── Height: Auto
│
├── Section 1: Hero
│   ├── Height: 60vh
│   ├── Component: Hero/Section
│   └── Content: 과정소개 타이틀 + 서브타이틀
│
├── Section 2: 4개 과정 카드
│   ├── Padding: 64px 0
│   ├── Container: 1200px
│   ├── Layout: 2x2 Grid
│   ├── Gap: 32px
│   │
│   ├── Card 1: 일반회화
│   ├── Card 2: 비즈니스회화
│   ├── Card 3: 토론과정
│   └── Card 4: 공인테스트대비
│
├── Section 3: 맞춤형 교육 강조
│   ├── Background: #FFF9E6
│   ├── Padding: 48px 0
│   ├── Text Align: Center
│   └── Icon: 책 아이콘
│
└── Section 4: CTA
    ├── Padding: 64px 0
    ├── Layout: 2 Buttons Horizontal
    ├── Gap: 24px
    │
    ├── Button 1: "무료 상담 신청" (Primary)
    └── Button 2: "전체 프로그램 보기" (Secondary)
```

#### 반응형 Variants
```
Desktop (1200px+)
- Grid: 2x2
- Container: 1200px

Tablet (768-1199px)
- Grid: 2x2 (smaller)
- Container: 100% - 48px margin

Mobile (<768px)
- Grid: 1 column stack
- Container: 100% - 32px margin
```

---

### Page 2: 일반회화 상세

#### Figma Frame 구조
```
Frame: Page/General-Conversation
│
├── Section 1: Hero
│   ├── Background: 카페 대화 이미지
│   └── Title: "전화외국어 일반회화 / General Conversation"
│
├── Section 2: Level Chart
│   ├── Component: Level/Chart
│   └── Highlight: Level 1-7
│
├── Section 3: 교재 소개
│   ├── Layout: 3 Columns
│   ├── Gap: 32px
│   │
│   ├── Textbook 1: Speak Now
│   ├── Textbook 2: Smart Choice
│   └── Textbook 3: American English File
│
├── Section 4: 학습 목표
│   ├── Layout: 2x2 Grid
│   ├── Each: Icon + Text
│   │
│   ├── 기초 문법과 회화
│   ├── 외국인과 기초 회화
│   ├── 발음 교정
│   └── 언어 스킬 향상
│
├── Section 5: 학습 세부 정보
│   ├── Component: Tab/Container
│   ├── Tabs: 수강대상, 교재, 학습진행
│   └── Content: 각 탭별 내용
│
├── Section 6: 학습 프로세스
│   ├── Layout: Horizontal Flow
│   ├── 5 Steps with Arrows
│   │
│   ├── Step 1: 레벨테스트
│   ├── Step 2: 교재 선택
│   ├── Step 3: 1:1 수업
│   ├── Step 4: 복습 학습
│   └── Step 5: 평가 피드백
│
└── Section 7: CTA
    ├── Button: "일반회화 과정 신청하기" (Primary, Full Width)
    └── Links: "다른 과정 보기", "무료 레벨 테스트"
```

---

### Page 3: 비즈니스회화 상세

#### Figma Frame 구조
```
Frame: Page/Business-Conversation
│
├── Section 1: Hero
│   ├── Background: 비즈니스 미팅 이미지
│   └── Title: "전화외국어 비즈니스회화 / Business Basic/Skills"
│
├── Section 2: Level Chart
│   └── Highlight: Level 4-7
│
├── Section 3: 교재 소개 (3 Columns)
│   ├── Best Practice
│   ├── Business Skills
│   └── Business Result
│
├── Section 4: 학습 목표
│   ├── Large Text Box
│   ├── Background: #FFF9E6
│   └── Padding: 32px
│
├── Section 5: 비즈니스 스킬 모듈
│   ├── Layout: 2x2 Grid
│   ├── Each Card: Icon + Title + Description
│   │
│   ├── Meetings
│   ├── Presentation
│   ├── Negotiating
│   └── Emails
│
├── Section 6: 학습 세부 정보
│   └── Tab Component
│
├── Section 7: 실무 활용 케이스 스터디
│   ├── Layout: Timeline (Vertical)
│   ├── 3 Cases with Icons
│   │
│   ├── Case 1: 글로벌 프로젝트 미팅
│   ├── Case 2: 해외 거래처 협상
│   └── Case 3: 영문 이메일 커뮤니케이션
│
└── Section 8: CTA
    ├── Primary: "비즈니스회화 과정 신청하기"
    └── Secondary: "기업 맞춤 교육 문의"
```

---

### Page 4: 토론과정 상세

#### Figma Frame 구조
```
Frame: Page/Discussion
│
├── Section 1: Hero
│   ├── Background: 토론 장면 이미지
│   └── Title: "전화외국어 토론과정 / Discussion/Debate"
│
├── Section 2: Level Chart
│   └── Highlight: Level 4-9 (특히 Level 9)
│
├── Section 3: 교재 소개
│   ├── Horizontal Slider
│   └── Communication Strategy 1-4
│
├── Section 4: 학습 목표 (2 Columns)
│   ├── 사고력 확장
│   └── 논리적 표현력
│
├── Section 5: 수강대상 (Checklist)
│   ├── 5 Items with Checkmarks
│   └── Icon: Checkmark (Green)
│
├── Section 6: 학습 시스템 (2 Options)
│   ├── Card 1: 주3회 과정
│   └── Card 2: 주5회 과정
│
├── Section 7: 토론 주제 예시
│   ├── Layout: Tag Cloud / Tiles
│   ├── 5 Categories
│   │
│   ├── 글로벌 이슈
│   ├── 비즈니스
│   ├── 과학기술
│   ├── 사회문화
│   └── 경제금융
│
├── Section 8: 학습 성과 (Before/After)
│   ├── Layout: 2 Columns with Arrow
│   ├── Before: 3 bullet points
│   └── After: 3 bullet points
│
└── Section 9: CTA
    ├── Primary: "토론과정 신청하기"
    └── Secondary: "무료 샘플 수업 신청"
```

---

### Page 5: 공인테스트대비 상세

#### Figma Frame 구조
```
Frame: Page/Test-Preparation
│
├── Section 1: Hero
│   ├── Background: TOEIC/OPIc 이미지
│   └── Title: "전화외국어 공인테스트 / TOEIC Speaking/OPIc/SPA"
│
├── Section 2: 시험 소개 (3 Tabs)
│   ├── Tab 1: TOEIC Speaking
│   ├── Tab 2: OPIc
│   └── Tab 3: SPA
│   │
│   └── Tab Content:
│       ├── 시험 구성
│       ├── 평가 영역
│       ├── 레벨 설명
│       └── 기업 활용
│
├── Section 3: Level Chart
│   └── Arrow: 현재 레벨 → 목표 레벨
│
├── Section 4: 교재 소개 (3 Columns)
│   ├── TOEIC Speaking 공식실전서
│   ├── New OPIc SOS
│   └── 스파르타 SPA
│
├── Section 5: 학습 목표 (3 Blocks)
│   ├── 시험 대비
│   ├── 레벨업
│   └── 실무 활용
│
├── Section 6: 학습진행 프로세스
│   ├── Layout: Horizontal Flow (5 Steps)
│   │
│   ├── Orientation (1주)
│   ├── Skill Up (2-4주)
│   ├── Practice (5-8주)
│   ├── Mock Test (9-12주)
│   └── Target Score (12주+)
│
├── Section 7: 학습 일정 (주간 스케줄 표)
│   ├── Table: 5 Columns (월-금)
│   ├── Rows: 내용
│   └── Footer: 주5회 설명
│
├── Section 8: 시험 전략 팁
│   ├── Layout: Accordion / FAQ
│   ├── Q1: TOEIC Speaking 높은 점수
│   └── Q2: OPIc 높은 등급
│
├── Section 9: 성공 사례 / 후기
│   ├── Layout: Card Slider
│   ├── Card: 이름, 회사, 점수 변화, 후기
│   └── Navigation: Dots
│
└── Section 10: CTA
    ├── Primary: "공인테스트 과정 신청하기" (Large)
    ├── Secondary: "무료 모의고사 체험"
    └── Link: "레벨 테스트 신청"
```

---

## 📐 WIREFRAME GUIDELINES

### Wireframe 생성 단계

1. **Low-Fidelity Wireframe**
   - 회색조 사용 (#F5F5F5, #E0E0E0, #333333)
   - 텍스트: "Lorem ipsum" 또는 실제 한글 샘플
   - 이미지: 회색 박스 + "Image Placeholder"
   - 버튼: 테두리만 있는 박스

2. **High-Fidelity Wireframe**
   - 실제 색상 적용
   - 실제 텍스트 콘텐츠
   - 이미지 플레이스홀더 (Unsplash)
   - 버튼 스타일 적용

3. **Mockup**
   - 최종 디자인 적용
   - 실제 이미지 삽입
   - 모든 인터랙션 상태 표시

---

## 🎭 INTERACTION & ANIMATION

### Figma에서 설정할 Prototype Interactions

#### Page Navigation
```
Trigger: Click
Action: Navigate to
Destination: Target Page
Animation: Smart Animate
Duration: 300ms
Easing: Ease In Out
```

#### Button Hover
```
Trigger: While Hovering
Action: Change to
Destination: Button/Hover State
Animation: Instant or Dissolve (100ms)
```

#### Card Hover
```
Trigger: While Hovering
Action: Change to
Destination: Card/Hover State
Animation: Smart Animate
Duration: 300ms
Effects: Shadow change + Transform
```

#### Tab Switch
```
Trigger: Click
Action: Change to
Destination: Tab Active State
Animation: Smart Animate
Duration: 200ms
```

#### Modal Open/Close
```
Open:
- Trigger: Click CTA
- Action: Open Overlay
- Animation: Dissolve
- Duration: 300ms

Close:
- Trigger: Click Outside or Close Button
- Action: Close Overlay
- Animation: Dissolve
- Duration: 200ms
```

---

## 📱 RESPONSIVE DESIGN

### Breakpoint Frames

#### Desktop Frame
```
Frame Name: Desktop/1200px
Width: 1920px (full design)
Container: 1200px (content max-width)
Grid: 12 columns, 24px gutter
```

#### Tablet Frame
```
Frame Name: Tablet/768px
Width: 768px
Container: 100% - 48px margin
Grid: 8 columns, 16px gutter
```

#### Mobile Frame
```
Frame Name: Mobile/375px
Width: 375px
Container: 100% - 32px margin
Grid: 4 columns, 12px gutter
```

### 반응형 변경 사항

**Desktop → Tablet**
- 2x2 Grid → 2x2 Grid (smaller)
- 폰트 크기 유지
- 이미지 비율 조정
- 패딩 24px → 16px

**Tablet → Mobile**
- 2x2 Grid → 1 Column Stack
- H1: 40px → 32px
- H2: 32px → 28px
- Body: 16px → 16px (유지)
- 패딩 16px → 12px
- 버튼: Full Width

---

## 🖼️ IMAGE ASSETS

### 필요한 이미지 목록

#### Hero Images (1920x1080px)
```
1. hero-main.jpg - 강아지와 함께 작업하는 여성들
2. hero-general.jpg - 카페에서 대화하는 두 사람
3. hero-business.jpg - 비즈니스 미팅 장면
4. hero-discussion.jpg - 교실 토론 장면
5. hero-test.jpg - TOEIC/OPIc 시험지 이미지
```

#### Card Images (600x400px)
```
1. card-general.jpg - 일반회화 대표 이미지
2. card-business.jpg - 비즈니스회화 대표 이미지
3. card-discussion.jpg - 토론 대표 이미지
4. card-test.jpg - 시험 대표 이미지
```

#### Textbook Covers (400x600px)
```
1. textbook-speak-now.png
2. textbook-smart-choice.png
3. textbook-american-english.png
4. textbook-best-practice.png
5. textbook-business-skills.png
6. textbook-business-result.png
7. textbook-communication-strategy.png
8. textbook-toeic-speaking.png
9. textbook-opic.png
10. textbook-spa.png
```

### Figma에서 이미지 추가하는 방법
1. 이미지를 Figma에 드래그 앤 드롭
2. 프레임을 선택하고 Fill → Image 선택
3. Fit: Fill 또는 Fit 선택
4. 이미지 위에 Overlay 레이어 추가 (필요시)

---

## ✅ FIGMA 작업 체크리스트

### 1단계: 프로젝트 설정
- [ ] Figma 새 프로젝트 생성: "ePlan - 전화외국어 섹션"
- [ ] 페이지 구조 생성 (Cover, Design System, Pages, Wireframes, Prototypes)
- [ ] Grid 설정 (Desktop, Tablet, Mobile)

### 2단계: Design System 구축
- [ ] Color Styles 생성 (Primary, Accent, Neutral)
- [ ] Text Styles 생성 (Heading H1-H3, Body, Caption)
- [ ] Spacing 변수 설정
- [ ] Effect Styles 생성 (Shadows)

### 3단계: Component 라이브러리
- [ ] Button 컴포넌트 (Primary, Secondary, variants)
- [ ] Card 컴포넌트 (Course Card, Textbook Card)
- [ ] Hero Section 컴포넌트
- [ ] Level Chart 컴포넌트
- [ ] Tab 컴포넌트
- [ ] Icon Set (24개 아이콘)

### 4단계: Wireframe 작성
- [ ] Page 1: 과정소개 메인 (Desktop, Tablet, Mobile)
- [ ] Page 2: 일반회화 (Desktop, Tablet, Mobile)
- [ ] Page 3: 비즈니스회화 (Desktop, Tablet, Mobile)
- [ ] Page 4: 토론과정 (Desktop, Tablet, Mobile)
- [ ] Page 5: 공인테스트대비 (Desktop, Tablet, Mobile)

### 5단계: High-Fidelity Design
- [ ] 실제 색상 적용
- [ ] 실제 텍스트 콘텐츠 입력
- [ ] 이미지 플레이스홀더 → 실제 이미지
- [ ] 모든 섹션 디자인 완성

### 6단계: Prototype 설정
- [ ] 페이지 간 네비게이션 연결
- [ ] 버튼 호버 상태 설정
- [ ] 카드 호버 상태 설정
- [ ] 탭 인터랙션 설정
- [ ] CTA 버튼 클릭 플로우

### 7단계: 검토 및 내보내기
- [ ] 디자인 일관성 검토
- [ ] 반응형 레이아웃 검증
- [ ] 프로토타입 테스트
- [ ] 개발자용 Spec 문서 생성 (Inspect 모드)
- [ ] 에셋 내보내기 (이미지, 아이콘)

---

## 📤 EXPORT SETTINGS

### 이미지 Export 설정
```
Hero Images:
- Format: JPG
- Quality: 80%
- @1x: 1920x1080px
- @2x: 3840x2160px (Retina)

Card Images:
- Format: WebP (with JPG fallback)
- Quality: 85%
- @1x: 600x400px
- @2x: 1200x800px

Icons:
- Format: SVG (vector)
- @1x: 64x64px
- Also export PNG @2x for fallback
```

### CSS Export
- Figma → Inspect 모드 사용
- CSS 코드 복사
- Tailwind CSS로 변환 (필요시)

---

## 🎯 DESIGN HANDOFF

### 개발자에게 전달할 자료

1. **Figma 파일 링크**
   - View 권한 부여
   - Inspect 모드 활성화

2. **Design Spec 문서**
   - 이 문서 (전체 명세서)
   - Color codes, Font sizes, Spacing values

3. **에셋 파일**
   - 압축 파일: `assets-phone-english.zip`
   - 폴더 구조:
     ```
     assets/
     ├── images/
     │   ├── hero/
     │   ├── cards/
     │   └── textbooks/
     ├── icons/
     │   ├── svg/
     │   └── png/
     └── fonts/
         ├── NotoSansKR/
         ├── Montserrat/
         └── Roboto/
     ```

4. **Prototype 링크**
   - 인터랙티브 프로토타입
   - 사용자 플로우 테스트용

---

## 💡 FIGMA TIPS

### 효율적인 작업을 위한 팁

1. **Auto Layout 사용**
   - 반응형 디자인에 필수
   - Padding, Gap 설정으로 유연한 레이아웃

2. **Component Variants**
   - 버튼, 카드 등의 상태 관리
   - Size, State별 variant 생성

3. **Styles 활용**
   - Color, Text, Effect Styles 재사용
   - 일관성 있는 디자인 유지

4. **Plugins 추천**
   - Unsplash: 무료 이미지
   - Content Reel: 더미 텍스트
   - Iconify: 아이콘 라이브러리
   - Stark: 접근성 체크

5. **Version Control**
   - 주요 단계마다 Version 저장
   - 이름: "v1.0 - Initial Design", "v1.1 - Feedback Applied"

---

## 📞 다음 단계

이 명세서를 기반으로 Figma 작업을 시작하세요:

1. **Figma.com 접속** → 새 프로젝트 생성
2. **Design System 페이지** → Color/Text Styles 생성
3. **Components 페이지** → 재사용 컴포넌트 제작
4. **Pages 페이지** → 5개 페이지 디자인
5. **Prototypes 페이지** → 인터랙션 연결

질문이나 추가 설명이 필요하면 언제든지 문의하세요!

---

**문서 작성**: Claude Code
**버전**: 1.0
**최종 수정일**: 2025-01-13
