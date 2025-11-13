# Changelog

## [2.0.0] - 2025-11-05

### Added
- **CSS 모듈화**: 13개 CSS 파일로 분리하여 유지보수성 향상
  - 01-base: variables, reset, typography
  - 02-layout: header, footer, grid
  - 03-components: buttons, cards, forms, tables, pagination, modals, accordion, alerts
  - 04-pages: common
  - 05-utilities: utilities
  
- **새로운 페이지**:
  - Corporate Programs (기업출강) - 6개 프로그램 소개
  - Writing Correction (Writing 첨삭) - 서비스 소개 및 과정 안내
  - Consulting Inquiries (컨설팅문의) - 문의 폼 및 FAQ
  - For Instructors (강사지원) - 지원 요건 및 지원 폼

- **게시판 확장**: 3개 카테고리 추가
  - 영어 (english)
  - 일본어 (japanese)
  - 중국어 (chinese)

- **데이터베이스 모델**:
  - ConsultingInquiry: 컨설팅 문의 관리
  - InstructorApplication: 강사 지원서 관리

- **폼**:
  - ConsultingForm: 컨설팅 문의 폼
  - InstructorApplicationForm: 강사 지원 폼

- **JavaScript 컴포넌트**:
  - Modal: 모달 팝업 기능
  - Accordion: 아코디언 UI 컴포넌트
  - Slider: 이미지/컨텐츠 슬라이더

### Changed
- CSS 파일 구조를 단일 파일에서 모듈 시스템으로 전환
- 네비게이션 메뉴에 새로운 페이지 추가
- BEM 네이밍 컨벤션 적용
- CSS 변수 시스템 확장 (간격, 타이포그래피, 그림자 등)

### Improved
- 유틸리티 클래스 시스템 추가로 개발 속도 향상
- 컴포넌트 재사용성 향상
- 반응형 디자인 개선
- 접근성(a11y) 고려

## [1.0.0] - 2025-11-05

### Initial Release
- Flask 기반 MVP 구현
- 기본 페이지 (Home, Company, Phone English)
- 게시판 시스템 (공지사항, 뉴스)
- 관리자 인증 및 대시보드
- SQLite 데이터베이스
- 기본 CSS 스타일링

