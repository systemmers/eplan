// ========================================
// Textbook Carousel Component
// ========================================

class TextbookCarousel {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        if (!this.container) return;

        this.track = this.container.querySelector('.textbook-carousel__track');
        this.cards = this.container.querySelectorAll('.textbook-card');
        this.prevBtn = this.container.querySelector('.textbook-carousel__btn--prev');
        this.nextBtn = this.container.querySelector('.textbook-carousel__btn--next');
        this.indicators = this.container.parentElement?.querySelector('.textbook-carousel__indicators');

        this.currentIndex = 0;
        this.cardsPerView = this.calculateCardsPerView();
        this.totalSlides = Math.ceil(this.cards.length / this.cardsPerView);

        this.init();
    }

    init() {
        if (!this.track || this.cards.length === 0) return;

        // 버튼 이벤트
        if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prev());
        if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.next());

        // 인디케이터 생성
        this.createIndicators();

        // 리사이즈 핸들링
        window.addEventListener('resize', this.debounce(() => {
            const newCardsPerView = this.calculateCardsPerView();
            if (newCardsPerView !== this.cardsPerView) {
                this.cardsPerView = newCardsPerView;
                this.totalSlides = Math.ceil(this.cards.length / this.cardsPerView);
                this.currentIndex = Math.min(this.currentIndex, this.totalSlides - 1);
                this.createIndicators();
                this.updatePosition();
            }
        }, 200));

        // 터치 스와이프 지원
        this.initTouchSupport();

        // 초기 위치 설정
        this.updatePosition();
    }

    calculateCardsPerView() {
        const width = window.innerWidth;
        if (width < 480) return 1;
        if (width < 768) return 2;
        if (width < 1024) return 3;
        return 4;
    }

    createIndicators() {
        if (!this.indicators) return;

        this.indicators.innerHTML = '';
        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('button');
            dot.className = `textbook-carousel__indicator ${i === this.currentIndex ? 'is-active' : ''}`;
            dot.setAttribute('aria-label', `슬라이드 ${i + 1}`);
            dot.addEventListener('click', () => this.goToSlide(i));
            this.indicators.appendChild(dot);
        }
    }

    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updatePosition();
        }
    }

    next() {
        if (this.currentIndex < this.totalSlides - 1) {
            this.currentIndex++;
            this.updatePosition();
        }
    }

    goToSlide(index) {
        if (index < 0 || index >= this.totalSlides) return;
        this.currentIndex = index;
        this.updatePosition();
    }

    updatePosition() {
        if (!this.track) return;

        // 카드 너비 + 갭 계산
        const card = this.cards[0];
        if (!card) return;

        const cardStyle = getComputedStyle(card);
        const cardWidth = card.offsetWidth;
        const gap = parseInt(getComputedStyle(this.track).gap) || 24;
        const slideWidth = (cardWidth + gap) * this.cardsPerView;

        this.track.style.transform = `translateX(-${this.currentIndex * slideWidth}px)`;

        // 버튼 상태 업데이트
        if (this.prevBtn) {
            this.prevBtn.disabled = this.currentIndex === 0;
            this.prevBtn.style.opacity = this.currentIndex === 0 ? '0.5' : '1';
        }
        if (this.nextBtn) {
            this.nextBtn.disabled = this.currentIndex >= this.totalSlides - 1;
            this.nextBtn.style.opacity = this.currentIndex >= this.totalSlides - 1 ? '0.5' : '1';
        }

        // 인디케이터 업데이트
        if (this.indicators) {
            this.indicators.querySelectorAll('.textbook-carousel__indicator').forEach((dot, idx) => {
                dot.classList.toggle('is-active', idx === this.currentIndex);
            });
        }
    }

    initTouchSupport() {
        let startX = 0;
        let isDragging = false;

        this.container.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        }, { passive: true });

        this.container.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
        }, { passive: true });

        this.container.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            isDragging = false;

            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            const threshold = 50;

            if (diff > threshold) this.next();
            else if (diff < -threshold) this.prev();
        }, { passive: true });
    }

    debounce(func, wait) {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }
}

// 전역 클래스로 내보내기
window.TextbookCarousel = TextbookCarousel;
