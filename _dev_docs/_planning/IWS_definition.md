Integrated Website Structure Definition
[통합 웹사이트 구조 정의서 / Integrated Website Structure Definition]

1. 레이아웃 타입 선택 / Layout Type Selection
  A. 일반형 레이아웃 / Standard Layout
     └── 특징
         - 고정 헤더
         - 스크롤 기반 네비게이션
         - 섹션별 독립 스크롤
         - 컨텐츠 중심 레이아웃

  B. 풀스크린형 레이아웃 / Fullscreen Layout
     └── 특징
         - 화면 단위 섹션
         - 스냅 스크롤
         - 수직/수평 전환 효과
         - 비주얼 중심 레이아웃

  C. 매거진형 레이아웃 / Magazine Layout
     └── 특징
         - 타이포그래피 중심
         - 비대칭 그리드
         - 여백 활용
         - 콘텐츠 계층구조

  D. 포트폴리오형 레이아웃 / Portfolio Layout
     └── 특징
         - 갤러리 그리드
         - 프로젝트 쇼케이스
         - 필터링 시스템
         - 상세 페이지 연동

2. 기본 설정 / Base Configuration
  A. 뷰포트 설정 / Viewport Settings
     └── Desktop (1920px)
         - Height: 100vh (min-height: 900px)
         - Width: 100vw
         - Aspect ratio: 16:9
     └── Tablet (768px)
         - Height: 100vh (min-height: 700px)
         - Width: 100vw
         - Aspect ratio: 4:3
     └── Mobile (360px)
         - Height: 100vh (min-height: 600px)
         - Width: 100vw
         - Aspect ratio: 9:16

  B. 전역 설정 / Global Settings
     - Container Width: 1280px (max-width)
     - Grid System: 12 columns
     - Gutter Width: 20px
     - Base Unit: 8px
     - Scroll Behavior: smooth
     - Scroll-snap-type: y mandatory

3. 스타일 시스템 / Style System
  A. 컬러 / Colors
     - Primary: #000000
     - Secondary: #FFFFFF
     - Accent: #FF0000
     - Background: #F5F5F5
     - Overlay: rgba(0,0,0,0.5)

  B. 타이포그래피 / Typography
     - H1: 64px/1.2 (Desktop), 48px/1.3 (Tablet), 36px/1.4 (Mobile)
     - H2: 48px/1.3 (Desktop), 36px/1.4 (Tablet), 24px/1.5 (Mobile)
     - Body: 16px/1.6
     - Caption: 14px/1.4

  C. 스타일 키워드와 디자인 요소 / Style Keywords & Design Elements
     ├── 비주얼 무드 / Visual Mood
     │   - Modern/Classic/Minimal
     │   - Bold/Subtle/Dynamic
     │   - Professional/Playful
     │   - Elegant/Casual
     │
     ├── 컴포넌트 스타일 / Component Style
     │   ├── 버튼 / Buttons
     │   │   - 라운드 코너: 8px
     │   │   - 호버 효과: Scale/Color
     │   │   - 상태: Default/Hover/Active/Disabled
     │   │
     │   ├── 카드 / Cards
     │   │   - 그림자: 0 4px 6px rgba(0,0,0,0.1)
     │   │   - 코너: 12px
     │   │   - 전환: all 0.3s ease
     │   │
     │   └── 폼 요소 / Forms
     │       - 입력 높이: 48px
     │       - 테두리: Underline only
     │       - 포커스: Accent color
     │
     ├── 상호작용과 애니메이션 / Interaction & Animation
     │   - 호버: 0.3s ease
     │   - 페이지 전환: 0.5s ease-in-out
     │   - 스크롤 효과: Fade up & Scale
     │
     └── 이미지 처리 / Image Treatment
         - 채도 조정: -10%
         - 대비: +10%
         - 스타일: High-key
         - 오버레이: 40% opacity

4. 레이아웃 구조 / Layout Structure
  A. 헤더 / Header
     - 고정 위치
     - 높이: 80px
     - 네비게이션
     - 유틸리티 메뉴

  B. 메인 섹션 / Main Sections
     ├── 히어로 섹션 / Hero Section
     │   - 전체 화면
     │   - 배경 처리
     │   - 콘텐츠 레이어
     │
     ├── 콘텐츠 섹션 / Content Section
     │   - 분할 레이아웃
     │   - 그리드 시스템
     │   - 여백 관리
     │
     └── 특수 섹션 / Special Sections
         - 갤러리
         - 카드 그리드
         - 컨택트 폼

5. 콘텐츠 플레이스홀더 전략 / Content Placeholder Strategy
  A. 스켈레톤 UI / Skeleton UI
     ├── 이미지 / Images
     │   - 기본 직사각형
     │   - 비율 유지
     │   - 로딩 애니메이션
     │
     └── 텍스트 / Text
         - 제목 블록
         - 단락 블록
         - 다양한 너비

  B. 대체 콘텐츠 / Fallback Content
     ├── 이미지 / Images
     │   - 기본 이미지
     │   - 색상 블록
     │   - 아이콘
     │
     └── 텍스트 / Text
         - 기본 메시지
         - 로딩 상태
         - 에러 상태

6. 성능 최적화 / Performance Optimization
  A. 이미지 최적화 / Image Optimization
     - WebP 사용
     - 크기 최적화
     - 지연 로딩

  B. 애니메이션 최적화 / Animation Optimization
     - 하드웨어 가속
     - 성능 모니터링
     - 최적화된 전환

7. 반응형 전략 / Responsive Strategy
  A. 중단점 / Breakpoints
     - Desktop: 1920px
     - Tablet: 768px
     - Mobile: 360px

  B. 콘텐츠 조정 / Content Adaptation
     - 레이아웃 변경
     - 이미지 크기
     - 타이포그래피 스케일
     - 컴포넌트 수정


[웹사이트 레이아웃 유형 정의서]

1. 기본 레이아웃 타입 / Basic Layout Types
   A. 일반형 / Standard
      └── 특징
          - 고정 헤더
          - 수직 스크롤
          - 반응형 그리드
          - 푸터 고정

   B. 풀스크린형 / Fullscreen
      └── 특징
          - 화면 전체 섹션
          - 스냅 스크롤
          - 페이지 단위 전환
          - 오버레이 네비게이션

   C. 카드형 / Card Layout
      └── 특징
          - 그리드 기반 카드
          - 마소닉(Masonry) 레이아웃
          - 필터링 기능
          - 무한 스크롤

   D. 매거진형 / Magazine Layout
      └── 특징
          - 타이포그래피 중심
          - 비대칭 그리드
          - 동적 여백
          - 콘텐츠 계층구조

2. 고급 레이아웃 타입 / Advanced Layout Types
   A. 수평 스크롤형 / Horizontal Scroll
      └── 특징
          - 가로 방향 스크롤
          - 슬라이드 전환
          - 타임라인 구조
          - 프로그레스 표시

   B. 포트폴리오형 / Portfolio
      └── 특징
          - 쇼케이스 중심
          - 갤러리 그리드
          - 작품 상세 모달
          - 카테고리 필터

   C. 스플릿형 / Split Screen
      └── 특징
          - 화면 분할 구조
          - 대비되는 콘텐츠
          - 병렬 스크롤
          - 인터랙티브 전환

   D. 모듈형 / Modular
      └── 특징
          - 블록 단위 구성
          - 드래그 앤 드롭
          - 동적 레이아웃
          - 사용자 정의 가능

3. 실험적 레이아웃 / Experimental Layouts
   A. 3D 트랜스폼형 / 3D Transform
      └── 특징
          - 3D 공간 활용
          - 시차 효과
          - 회전 애니메이션
          - 깊이감 표현

   B. 캔버스 기반형 / Canvas Based
      └── 특징
          - WebGL 활용
          - 파티클 효과
          - 인터랙티브 배경
          - 동적 그래픽

   C. 스크롤 기반 애니메이션 / Scroll Animation
      └── 특징
          - 스크롤 연동 효과
          - 시퀀스 애니메이션
          - 스토리텔링 구조
          - 진행률 표시

   D. 비선형 레이아웃 / Non-linear
      └── 특징
          - 자유 형태 구조
          - 유기적 전환
          - 랜덤 배치
          - 실험적 내비게이션

4. 하이브리드 레이아웃 / Hybrid Layouts
   A. 복합형 / Combined
      └── 특징
          - 여러 레이아웃 혼합
          - 섹션별 다른 구조
          - 유동적 전환
          - 맥락 기반 변경

   B. 적응형 / Adaptive
      └── 특징
          - 디바이스 최적화
          - 상황별 레이아웃
          - 동적 재구성
          - 사용자 맞춤형

5. 레이아웃 선택 기준 / Selection Criteria
   A. 콘텐츠 특성
      - 텍스트 중심
      - 이미지 중심
      - 인터랙션 중심
      - 데이터 중심

   B. 사용자 경험
      - 접근성
      - 사용 편의성
      - 정보 구조
      - 네비게이션 용이성

   C. 기술적 요구사항
      - 성능 최적화
      - 브라우저 지원
      - 유지보수성
      - 확장 가능성



[Content Placeholder Strategy]

1. Skeleton UI Components
   A. Image Placeholders
      ├── Basic Rectangle
      │   - background: linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%)
      │   - animation: loading 1.5s infinite
      │
      ├── Aspect Ratio Box
      │   - aspect-ratio: 16/9
      │   - background-color: #f0f0f0
      │
      └── SVG Placeholder
          - width: 100%
          - height: auto
          - color: #e0e0e0

   B. Text Placeholders
      ├── Title Skeleton
      │   - height: 32px
      │   - width: 70%
      │   - margin-bottom: 16px
      │   - background: #f0f0f0
      │
      └── Paragraph Skeleton
          - height: 16px
          - margin-bottom: 8px
          - width: [90%, 80%, 85%] /* 다양한 너비로 자연스러움 표현 */

2. Fixed Dimension Strategy
   A. Container Constraints
      ├── Min-Height Settings
      │   - Section: min-height: 100vh
      │   - Card: min-height: 300px
      │   - Image box: min-height: 200px
      │
      └── Min-Width Settings
          - Container: min-width: 320px
          - Content area: min-width: 280px

   B. Aspect Ratio Maintenance
      ```css
      .aspect-box {
        aspect-ratio: 16/9;
        background: #f0f0f0;
      }
      ```

3. Dummy Content Solutions
   A. Lorem Ipsum Text
      ├── Title: "Lorem ipsum dolor sit amet"
      ├── Short text: 150 characters
      ├── Medium text: 300 characters
      └── Long text: 500 characters

   B. Placeholder Images
      ├── External Services
      │   - https://picsum.photos/[width]/[height]
      │   - https://placeholder.com/[width]x[height]
      │
      └── Local Assets
          - default-hero.jpg: 1920x1080
          - default-thumbnail.jpg: 300x300
          - default-avatar.jpg: 64x64

4. Loading State Management
   A. Skeleton Animation
      ```css
      @keyframes loading {
        0% { opacity: 0.6; }
        50% { opacity: 0.8; }
        100% { opacity: 0.6; }
      }
      ```

   B. Progressive Loading
      ├── Low-quality Image Placeholder (LQIP)
      ├── Blur-up Technique
      └── Dominant Color Background

5. Emergency Fallbacks
   A. Default Components
      ```javascript
      const ImageWithFallback = ({ src, alt, className }) => {
        const handleError = (e) => {
          e.target.onerror = null;
          e.target.src = '/path/to/fallback-image.jpg'
        }
        return (
          <img
            src={src}
            alt={alt}
            onError={handleError}
            className={className}
          />
        )
      }
      ```

   B. Content Checks
      ```javascript
      const Title = ({ text }) => (
        <h1>{text || 'Untitled Content'}</h1>
      )

      const Description = ({ content }) => (
        <p>{content || 'No description available.'}</p>
      )
      ```

6. Dynamic Space Filling
   A. Grid Auto-Fill
      ```css
      .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
      }
      ```

   B. Flex Space Distribution
      ```css
      .flex-container {
        display: flex;
        justify-content: space-between;
        min-height: 200px;
      }

      .flex-item {
        flex: 1;
        min-width: 200px;
      }
      ```