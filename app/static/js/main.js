// ============================================
// ePlan Main JavaScript - Entry Point
// ============================================
// 컴포넌트: components/accordion.js, modal.js, slider.js, carousel.js
// 유틸리티: utils/navigation.js

// ============================================
// 페이지 컴포넌트 초기화 함수
// ============================================

// 페이지별 컴포넌트 초기화
function initPageComponents() {
    // 아코디언 초기화 (components/accordion.js)
    if (typeof initTextbookAccordions === 'function') {
        initTextbookAccordions();
    }

    // 교재 모달 초기화 - 통합 함수 (components/textbook-modal.js)
    // 카드, 9레벨 테이블 썸네일/셀 등 모든 트리거 처리
    if (typeof initTextbookModal === 'function') {
        initTextbookModal();
    }
}

// 교재 컴포넌트 초기화
function initTextbookComponents() {
    // 캐러셀 초기화 (components/carousel.js)
    if (typeof TextbookCarousel === 'function') {
        new TextbookCarousel('.textbook-carousel');
    }

    // 모달 슬라이더 초기화 (components/slider.js)
    if (typeof ModalImageSlider !== 'undefined' && ModalImageSlider.init) {
        ModalImageSlider.init();
    }
}

// ============================================
// 통합 초기화 (Single Entry Point)
// ============================================

function initApp() {
    console.log('ePlan website loaded');

    // 네비게이션 초기화 (utils/navigation.js)
    if (typeof initNavigation === 'function') {
        initNavigation();
    }

    // UI 유틸리티 초기화 (utils/navigation.js)
    if (typeof initUIUtilities === 'function') {
        initUIUtilities();
    }

    // 페이지 컴포넌트 초기화
    initPageComponents();

    // 교재 컴포넌트 초기화
    initTextbookComponents();
}

// ============================================
// Event Listeners (통합)
// ============================================

// DOM Ready - 단일 핸들러
document.addEventListener('DOMContentLoaded', initApp);

// HTMX 페이지 전환 - 단일 핸들러
document.body.addEventListener('htmx:afterSwap', function(event) {
    // main-content가 타겟인 경우에만 처리
    if (event.detail.target.id === 'main-content') {
        // 스크롤 상단으로 이동
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // 페이지 컴포넌트 재초기화
        initPageComponents();

        // 교재 갤러리 섹션이 포함된 경우에만 교재 컴포넌트 초기화
        if (event.detail.target.querySelector('.textbook-carousel') ||
            event.detail.target.querySelector('.textbook-modal')) {
            initTextbookComponents();
        }
    }
});
