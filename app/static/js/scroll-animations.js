/**
 * Scroll Animations Module
 *
 * 스크롤 기반 진입 애니메이션 컨트롤러
 * IntersectionObserver를 사용하여 뷰포트 진입 시 애니메이션 트리거
 */

const ScrollAnimations = {
    observer: null,

    config: {
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.1,
        visibleClass: 'is-visible'  // 프로젝트 컨벤션: is-* 패턴
    },

    init: function() {
        // reduced motion 체크
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            this.showAllImmediately();
            return;
        }

        this.createObserver();
        this.observeElements();
    },

    createObserver: function() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(this.config.visibleClass);
                    this.observer.unobserve(entry.target); // 한 번만 트리거
                }
            });
        }, {
            root: null,
            rootMargin: this.config.rootMargin,
            threshold: this.config.threshold
        });
    },

    observeElements: function() {
        const elements = document.querySelectorAll('[data-scroll-animate]');
        elements.forEach(el => this.observer.observe(el));
    },

    showAllImmediately: function() {
        const elements = document.querySelectorAll('[data-scroll-animate]');
        elements.forEach(el => el.classList.add(this.config.visibleClass));
    },

    destroy: function() {
        if (this.observer) {
            this.observer.disconnect();
            this.observer = null;
        }
    },

    // HTMX 재초기화용
    reinit: function() {
        this.destroy();
        this.init();
    }
};

// 초기화 함수 (main.js에서 호출)
function initScrollAnimations() {
    ScrollAnimations.init();
}
