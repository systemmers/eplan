// ============================================
// Textbook Gallery Modal Component
// ============================================

// 교재 갤러리 모달용 데이터는 textbookData.js에서 관리
// getGalleryModalData() 함수를 사용하여 데이터 접근

// 교재 갤러리 모달 초기화 함수
function initTextbookGalleryModal() {
    const modal = document.getElementById('textbook-modal');
    if (!modal) return;

    const backdrop = modal.querySelector('.textbook-modal__backdrop');
    const closeBtn = modal.querySelector('.textbook-modal__close');
    const cards = document.querySelectorAll('.textbook-card');

    // 카드 클릭 이벤트 (중복 방지)
    cards.forEach(card => {
        if (card.dataset.modalBound) return;
        card.dataset.modalBound = 'true';

        card.addEventListener('click', function() {
            const bookId = this.dataset.book;
            openTextbookModal(bookId);
        });
    });

    // 닫기 버튼 중복 방지
    if (closeBtn && !closeBtn.dataset.modalBound) {
        closeBtn.dataset.modalBound = 'true';
        closeBtn.addEventListener('click', closeTextbookModal);
    }

    // 백드롭 중복 방지
    if (backdrop && !backdrop.dataset.modalBound) {
        backdrop.dataset.modalBound = 'true';
        backdrop.addEventListener('click', closeTextbookModal);
    }

    // ESC 키로 모달 닫기 (한 번만 등록)
    if (!modal.dataset.escBound) {
        modal.dataset.escBound = 'true';
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('is-active')) {
                closeTextbookModal();
            }
        });
    }
}

// 모달 열기 함수
function openTextbookModal(bookId) {
    const modal = document.getElementById('textbook-modal');

    // textbookData.js의 getGalleryModalData() 함수 사용
    const bookData = typeof getGalleryModalData === 'function'
        ? getGalleryModalData(bookId)
        : null;

    if (!modal || !bookData) {
        console.warn('Modal or book data not found:', bookId);
        return;
    }

    // 모달 콘텐츠 업데이트
    document.getElementById('modal-title').textContent = bookData.title;
    document.getElementById('modal-level').textContent = bookData.level;
    document.getElementById('modal-category').textContent = bookData.category;
    document.getElementById('modal-target').textContent = bookData.target;
    document.getElementById('modal-desc').textContent = bookData.description;

    // 특징 목록 업데이트
    const featuresContainer = document.getElementById('modal-features');
    featuresContainer.innerHTML = bookData.features.map(f => `<li>${f}</li>`).join('');

    // 이미지 슬라이더 설정 (samples 배열이 있으면 사용, 없으면 커버 이미지만)
    const images = bookData.samples && bookData.samples.length > 0
        ? bookData.samples
        : [bookData.image];
    ModalImageSlider.setImages(images);

    // 모달 표시 (슬라이더 레이아웃 클래스 추가)
    modal.classList.add('is-active', 'textbook-modal--with-slider');
    document.body.style.overflow = 'hidden';
}

// 모달 닫기 함수
function closeTextbookModal() {
    const modal = document.getElementById('textbook-modal');
    if (modal) {
        modal.classList.remove('is-active', 'textbook-modal--with-slider');
        document.body.style.overflow = '';
    }
}

// 전역 함수로 내보내기 (HTMX 재초기화용)
window.initTextbookGalleryModal = initTextbookGalleryModal;
window.openTextbookModal = openTextbookModal;
window.closeTextbookModal = closeTextbookModal;
