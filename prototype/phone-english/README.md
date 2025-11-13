# ePlan 전화외국어 섹션 HTML 프로토타입

Figma 디자인 명세서를 기반으로 제작된 인터랙티브 HTML 프로토타입입니다.

## 📁 프로젝트 구조

```
phone-english/
├── index.html                      # 메인 페이지 (과정소개)
├── general-conversation.html       # 일반회화 상세 페이지
├── business-conversation.html      # 비즈니스회화 상세 페이지
├── discussion.html                 # 토론과정 상세 페이지
├── test-preparation.html           # 공인테스트대비 상세 페이지
├── css/
│   └── design-system.css           # 디자인 시스템 CSS
├── js/
│   └── main.js                     # JavaScript 인터랙션
├── images/                         # 이미지 폴더 (추후 추가)
└── README.md                       # 본 문서
```

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary Yellow**: `#FFD700` - 메인 색상, CTA 버튼
- **Primary Yellow Light**: `#FFF9E6` - 배경, 강조 영역
- **Primary Yellow Dark**: `#F4C430` - 호버 상태
- **Accent Green**: `#4CAF50` - 성공, 긍정 메시지
- **Accent Blue**: `#2196F3` - 링크, 정보
- **Accent Orange**: `#FF9800` - 경고, 중요 알림

### 타이포그래피
- **한글**: Noto Sans KR (Regular 400, Semi Bold 600, Bold 700)
- **영문**: Montserrat, Roboto
- **크기**:
  - H1: 40px (모바일: 32px)
  - H2: 32px (모바일: 28px)
  - H3: 24px (모바일: 20px)
  - Body: 16px

### 간격 시스템
- XS: 4px
- S: 8px
- M: 16px
- L: 24px
- XL: 32px
- XXL: 48px
- XXXL: 64px

## 🚀 실행 방법

### 로컬에서 실행

1. **프로젝트 폴더 열기**
   ```bash
   cd D:\projects\eplan\prototype\phone-english
   ```

2. **웹 브라우저로 열기**
   - `index.html` 파일을 더블클릭하거나
   - 브라우저에서 파일 경로 입력

3. **Live Server 사용 (권장)**
   - VS Code에서 Live Server 확장 설치
   - `index.html` 우클릭 → "Open with Live Server"

### 브라우저 호환성
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 페이지 구성

### 1. 메인 페이지 (index.html)
- **히어로 섹션**: 과정소개 타이틀 + 서브타이틀
- **4개 과정 카드**: 일반회화, 비즈니스회화, 토론과정, 공인테스트
- **맞춤형 교육 강조**: Topic Book 안내
- **CTA 섹션**: 무료 상담 신청, 프로그램 보기

### 2. 일반회화 (general-conversation.html)
- 학습 레벨 차트 (L1-9, L1-7 강조)
- 사용 교재 (Speak Now, Smart Choice, American English File)
- 학습 목표 (4개 카드)
- 탭 컴포넌트 (수강대상, 교재, 학습진행)
- 학습 프로세스 플로우

### 3. 비즈니스회화 (business-conversation.html)
- 레벨 차트 (L4-7 강조)
- 비즈니스 교재 (Best Practice, Business Skills, Business Result)
- 비즈니스 스킬 모듈 (Meetings, Presentation, Negotiating, Emails)
- 실무 활용 케이스 스터디

### 4. 토론과정 (discussion.html)
- 레벨 차트 (L4-9 강조)
- Communication Strategy 교재
- 학습 시스템 (주3회/주5회)
- 토론 주제 예시 (5개 카테고리)
- Before/After 학습 성과

### 5. 공인테스트대비 (test-preparation.html)
- 3개 시험 탭 (TOEIC Speaking, OPIc, SPA)
- 시험별 교재
- 학습진행 프로세스 (5단계)
- 주간 학습 스케줄 표
- 시험 전략 FAQ

## 🎯 주요 기능

### 1. 네비게이션
- 고정 헤더 (Sticky Navigation)
- 페이지 간 링크 연결
- 현재 페이지 활성화 표시

### 2. 인터랙티브 요소
- **카드 호버 효과**: 상승 애니메이션 + 그림자 강화
- **버튼 호버**: 색상 변화 + 상승 효과
- **탭 컴포넌트**: 클릭으로 콘텐츠 전환
- **레벨 차트**: 호버 시 레벨 설명 툴팁
- **Scroll to Top**: 스크롤 다운 시 상단 이동 버튼

### 3. 반응형 디자인
- **Desktop** (1200px+): 2x2 그리드, 풀사이즈 레이아웃
- **Tablet** (768-1199px): 2열 그리드, 여백 조정
- **Mobile** (<768px): 1열 스택, 전체 너비 버튼

## 🛠️ 커스터마이징

### CSS 변수 수정
`css/design-system.css` 파일에서 CSS 변수를 수정하여 디자인 변경:

```css
:root {
  --color-primary-yellow: #FFD700;  /* 메인 색상 변경 */
  --font-size-h1: 40px;              /* 제목 크기 변경 */
  --spacing-xl: 32px;                /* 간격 조정 */
}
```

### 새로운 컴포넌트 추가
기존 컴포넌트 클래스를 활용하여 새로운 요소 추가:

```html
<div class="card">
  <div class="card-content">
    <h3 class="card-title">제목</h3>
    <p class="card-description">설명</p>
  </div>
</div>
```

### JavaScript 기능 추가
`js/main.js` 파일에 새로운 함수 추가:

```javascript
function myCustomFunction() {
  // 커스텀 기능 구현
}

// 초기화
document.addEventListener('DOMContentLoaded', myCustomFunction);
```

## 📱 반응형 테스트

### 데스크톱 (1920x1080)
- 최대 컨테이너 너비: 1200px
- 2x2 그리드 레이아웃
- 모든 기능 활성화

### 태블릿 (768x1024)
- 2열 그리드 유지
- 폰트 크기 약간 축소
- 패딩 조정

### 모바일 (375x667)
- 1열 스택 레이아웃
- 햄버거 메뉴 (추후 구현)
- 전체 너비 버튼
- 터치 최적화

## 🎨 이미지 에셋

현재 프로토타입은 **이모지와 그라데이션 배경**을 사용하여 이미지 플레이스홀더를 대체했습니다.

### 실제 이미지 교체 방법
1. `images/` 폴더에 이미지 파일 추가
2. HTML에서 배경 또는 `<img>` 태그로 교체:

```html
<!-- Before (이모지) -->
<div style="font-size: 64px;">☕</div>

<!-- After (실제 이미지) -->
<img src="images/general-conversation.jpg" alt="일반회화" class="card-image">
```

### 필요한 이미지 목록
- **Hero 이미지** (1920x1080): 5개 페이지용
- **Card 이미지** (600x400): 4개 과정용
- **교재 표지** (400x600): 10개 교재용

## 📊 성능 최적화

### 이미지 최적화
- WebP 포맷 사용 (JPG fallback)
- Lazy Loading 구현
- 적절한 이미지 크기

### CSS 최적화
- 중복 스타일 제거
- Critical CSS 인라인
- 미사용 CSS 제거

### JavaScript 최적화
- 이벤트 위임 사용
- Debounce/Throttle 적용
- 모듈화 및 번들링

## ♿ 접근성 (Accessibility)

### 구현된 접근성 기능
- ✅ Semantic HTML 사용
- ✅ Alt 텍스트 (이미지 추가 시)
- ✅ 키보드 네비게이션 지원
- ✅ 충분한 색상 대비 (4.5:1 이상)
- ✅ Focus 상태 표시

### 추가 개선 사항
- [ ] ARIA 레이블 추가
- [ ] Skip to Content 링크
- [ ] 스크린 리더 테스트
- [ ] 키보드 전용 테스트

## 🔧 향후 개발 계획

### Phase 2: 기능 추가
- [ ] 모바일 햄버거 메뉴
- [ ] 신청 폼 구현
- [ ] 모의고사 기능
- [ ] 강사 소개 섹션
- [ ] 수강생 후기 슬라이더

### Phase 3: 백엔드 연동
- [ ] 신청 폼 API 연결
- [ ] 레벨 테스트 결과 저장
- [ ] 관리자 대시보드
- [ ] 결제 시스템 연동

### Phase 4: 고도화
- [ ] 다국어 지원 (한/영)
- [ ] 다크 모드
- [ ] PWA 변환
- [ ] SEO 최적화

## 📚 참고 문서

- [Figma 디자인 명세서](../claudedocs/figma_design_specification_phone_english.md)
- [이미지 문서](../claudedocs/main_contents_img_documentation.md)
- [프로젝트 CLAUDE.md](../CLAUDE.md)

## 🐛 알려진 이슈

1. **이미지 미적용**: 실제 이미지 대신 이모지 사용 중
2. **모바일 메뉴**: 햄버거 메뉴 미구현 (탭 형태로 대체)
3. **폼 기능**: 신청 폼 백엔드 미연결 (alert로 대체)

## 💬 피드백 및 문의

프로토타입에 대한 피드백이나 수정 요청사항이 있으시면 알려주세요.

## 📄 라이선스

이 프로토타입은 ePlan 프로젝트의 일부입니다.

---

**제작일**: 2025-01-13
**버전**: 1.0
**제작자**: Claude Code
**기반 문서**: Figma Design Specification
