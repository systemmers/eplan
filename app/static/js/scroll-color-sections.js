/**
 * Scroll Color Sections
 * 스크롤 기반 배경색 전환 및 네비게이션 UI 컴포넌트
 *
 * 기능:
 * - 섹션별 배경색 전환 (IntersectionObserver)
 * - 스크롤 프로그레스 바
 * - 네비게이션 도트
 * - 스크롤 인디케이터
 */

const ScrollColorSections = {
    sections: [],
    navDotsContainer: null,
    progressBar: null,
    scrollIndicator: null,
    observer: null,
    scrollHandler: null,

    init: function() {
        this.sections = document.querySelectorAll('section[data-bg]');
        if (!this.sections.length) return;

        this.createUI();
        this.createObserver();
        this.bindEvents();

        // 초기 상태 설정
        if (this.sections[0]) {
            this.sections[0].classList.add('active');
            document.body.style.backgroundColor = this.sections[0].dataset.bg;
        }
    },

    createUI: function() {
        // 기존 UI 요소 제거 (중복 방지)
        this.removeExistingUI();

        // 프로그레스 바
        this.progressBar = document.createElement('div');
        this.progressBar.className = 'scroll-progress-bar';
        document.body.appendChild(this.progressBar);

        // 네비게이션 도트
        this.navDotsContainer = document.createElement('nav');
        this.navDotsContainer.className = 'scroll-nav-dots';
        this.navDotsContainer.setAttribute('aria-label', 'Section navigation');

        this.sections.forEach((section, index) => {
            const dot = document.createElement('button');
            dot.className = 'scroll-nav-dot';
            dot.setAttribute('aria-label', `Go to section ${index + 1}`);
            if (index === 0) dot.classList.add('active');

            dot.addEventListener('click', () => {
                section.scrollIntoView({ behavior: 'smooth' });
            });

            this.navDotsContainer.appendChild(dot);
        });
        document.body.appendChild(this.navDotsContainer);

        // 스크롤 인디케이터
        this.scrollIndicator = document.createElement('div');
        this.scrollIndicator.className = 'scroll-indicator';
        this.scrollIndicator.innerHTML = `
            <span>Scroll</span>
            <div class="scroll-arrow"></div>
        `;
        document.body.appendChild(this.scrollIndicator);
    },

    removeExistingUI: function() {
        const existingProgressBar = document.querySelector('.scroll-progress-bar');
        const existingNavDots = document.querySelector('.scroll-nav-dots');
        const existingIndicator = document.querySelector('.scroll-indicator');

        if (existingProgressBar) existingProgressBar.remove();
        if (existingNavDots) existingNavDots.remove();
        if (existingIndicator) existingIndicator.remove();
    },

    createObserver: function() {
        const options = {
            root: null,
            rootMargin: '-40% 0px -40% 0px',
            threshold: 0
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const section = entry.target;
                    const bgColor = section.dataset.bg;
                    const index = Array.from(this.sections).indexOf(section);

                    // 배경색 전환
                    document.body.style.backgroundColor = bgColor;

                    // 활성 섹션 업데이트
                    this.sections.forEach(s => s.classList.remove('active'));
                    section.classList.add('active');

                    // 네비게이션 도트 업데이트
                    if (this.navDotsContainer) {
                        const dots = this.navDotsContainer.querySelectorAll('.scroll-nav-dot');
                        dots.forEach((dot, i) => {
                            dot.classList.toggle('active', i === index);
                        });
                    }
                }
            });
        }, options);

        this.sections.forEach(section => this.observer.observe(section));
    },

    bindEvents: function() {
        // 스크롤 이벤트 핸들러
        this.scrollHandler = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

            // 프로그레스 바 업데이트
            if (this.progressBar) {
                this.progressBar.style.width = scrollPercent + '%';
            }

            // 스크롤 인디케이터 숨김 (100px 이후)
            if (this.scrollIndicator) {
                if (scrollTop > 100) {
                    this.scrollIndicator.classList.add('hidden');
                } else {
                    this.scrollIndicator.classList.remove('hidden');
                }
            }
        };

        window.addEventListener('scroll', this.scrollHandler, { passive: true });
    },

    destroy: function() {
        // Observer 해제
        if (this.observer) {
            this.observer.disconnect();
            this.observer = null;
        }

        // 이벤트 리스너 해제
        if (this.scrollHandler) {
            window.removeEventListener('scroll', this.scrollHandler);
            this.scrollHandler = null;
        }

        // UI 요소 제거
        if (this.progressBar) {
            this.progressBar.remove();
            this.progressBar = null;
        }
        if (this.navDotsContainer) {
            this.navDotsContainer.remove();
            this.navDotsContainer = null;
        }
        if (this.scrollIndicator) {
            this.scrollIndicator.remove();
            this.scrollIndicator = null;
        }

        // 배경색 초기화
        document.body.style.backgroundColor = '';

        // 섹션 참조 초기화
        this.sections = [];
    }
};

/**
 * 초기화 함수
 */
function initScrollColorSections() {
    ScrollColorSections.init();
}

// DOM 로드 시 초기화
document.addEventListener('DOMContentLoaded', initScrollColorSections);

// HTMX 호환성 - 페이지 전환 시 정리 및 재초기화
if (typeof htmx !== 'undefined') {
    document.body.addEventListener('htmx:beforeSwap', function() {
        ScrollColorSections.destroy();
    });

    document.body.addEventListener('htmx:afterSwap', function() {
        initScrollColorSections();
    });
}
