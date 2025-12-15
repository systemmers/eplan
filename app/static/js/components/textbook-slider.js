// ========================================
// Modal Image Slider Component
// ========================================

const ModalImageSlider = {
    currentIndex: 0,
    images: [],
    track: null,
    counter: null,
    thumbnails: null,

    init() {
        this.track = document.getElementById('modal-slider-track');
        this.counter = {
            current: document.getElementById('modal-current-slide'),
            total: document.getElementById('modal-total-slides')
        };
        this.thumbnails = document.getElementById('modal-thumbnails');

        // 버튼 이벤트 바인딩
        const prevBtn = document.querySelector('.textbook-modal__slider-btn--prev');
        const nextBtn = document.querySelector('.textbook-modal__slider-btn--next');

        if (prevBtn) prevBtn.addEventListener('click', () => this.prev());
        if (nextBtn) nextBtn.addEventListener('click', () => this.next());

        // 키보드 네비게이션
        document.addEventListener('keydown', (e) => {
            const modal = document.getElementById('textbook-modal');
            if (!modal || !modal.classList.contains('is-active')) return;

            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });
    },

    setImages(imageArray) {
        this.images = imageArray || [];
        this.currentIndex = 0;
        this.render();
    },

    render() {
        if (!this.track) return;

        // 슬라이드 생성
        this.track.innerHTML = this.images.map((src, idx) => `
            <div class="textbook-modal__slide">
                <img src="${src}" alt="교재 샘플 ${idx + 1}" class="textbook-modal__slide-image" loading="lazy">
            </div>
        `).join('');

        // 카운터 업데이트
        if (this.counter.current) this.counter.current.textContent = '1';
        if (this.counter.total) this.counter.total.textContent = this.images.length;

        // 썸네일 생성
        if (this.thumbnails) {
            this.thumbnails.innerHTML = this.images.map((src, idx) => `
                <button class="textbook-modal__thumbnail ${idx === 0 ? 'is-active' : ''}"
                        data-index="${idx}"
                        aria-label="샘플 ${idx + 1}">
                    <img src="${src}" alt="썸네일 ${idx + 1}">
                </button>
            `).join('');

            // 썸네일 클릭 이벤트
            this.thumbnails.querySelectorAll('.textbook-modal__thumbnail').forEach(thumb => {
                thumb.addEventListener('click', () => {
                    this.goToSlide(parseInt(thumb.dataset.index));
                });
            });
        }

        this.updatePosition();
    },

    prev() {
        if (this.images.length <= 1) return;
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.updatePosition();
    },

    next() {
        if (this.images.length <= 1) return;
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.updatePosition();
    },

    goToSlide(index) {
        if (index < 0 || index >= this.images.length) return;
        this.currentIndex = index;
        this.updatePosition();
    },

    updatePosition() {
        if (!this.track) return;

        // 트랙 이동
        this.track.style.transform = `translateX(-${this.currentIndex * 100}%)`;

        // 카운터 업데이트
        if (this.counter.current) {
            this.counter.current.textContent = this.currentIndex + 1;
        }

        // 썸네일 활성 상태 업데이트
        if (this.thumbnails) {
            this.thumbnails.querySelectorAll('.textbook-modal__thumbnail').forEach((thumb, idx) => {
                thumb.classList.toggle('is-active', idx === this.currentIndex);
            });
        }
    }
};

// 전역 객체로 내보내기 (modal.js에서 사용)
window.ModalImageSlider = ModalImageSlider;
