// ============================================
// Textbook Gallery Modal Component
// ============================================
// 통합된 모달 초기화 - 모든 교재 클릭 트리거 처리

// 교재 갤러리 모달용 데이터는 textbookData.js에서 관리
// getGalleryModalData() 함수를 사용하여 데이터 접근

// ============================================
// 통합 모달 트리거 설정
// ============================================
const TEXTBOOK_MODAL_TRIGGERS = [
    {
        // 교재 카드 (캐러셀, 아코디언 등)
        selector: '.textbook-card',
        getBookId: (el) => el.dataset.book,
        boundKey: 'modalBound'
    },
    {
        // 9레벨 커리큘럼 테이블 썸네일
        selector: '.textbook-thumbnail-9level',
        getBookId: (el) => el.dataset.bookId,
        boundKey: 'modalBound',
        stopPropagation: true
    },
    {
        // 9레벨 커리큘럼 테이블 셀 (첫 번째 교재로 열기)
        selector: '.textbook-cell-9level',
        getBookId: (el) => {
            const ids = el.dataset.textbookIds;
            if (ids) {
                try {
                    const parsed = JSON.parse(ids);
                    return parsed && parsed.length > 0 ? parsed[0] : null;
                } catch (e) {
                    return null;
                }
            }
            return null;
        },
        boundKey: 'cellModalBound',
        skipIf: (e) => e.target.classList.contains('textbook-thumbnail-9level')
    }
];

// ============================================
// 통합 모달 초기화 함수
// ============================================
function initTextbookModal() {
    const modal = document.getElementById('textbook-modal');
    if (!modal) return;

    // 모든 트리거에 대해 이벤트 바인딩
    TEXTBOOK_MODAL_TRIGGERS.forEach(config => {
        const elements = document.querySelectorAll(config.selector);

        elements.forEach(el => {
            // 이미 바인딩된 경우 스킵
            if (el.dataset[config.boundKey]) return;
            el.dataset[config.boundKey] = 'true';

            el.addEventListener('click', function(e) {
                // skipIf 조건이 있으면 체크
                if (config.skipIf && config.skipIf(e)) return;

                // stopPropagation 설정시 이벤트 전파 중단
                if (config.stopPropagation) e.stopPropagation();

                const bookId = config.getBookId(this);
                if (bookId) {
                    openTextbookModal(bookId);
                }
            });
        });
    });

    // 모달 닫기 이벤트 (한 번만 등록)
    initModalCloseHandlers(modal);
}

// ============================================
// 모달 닫기 핸들러 초기화
// ============================================
function initModalCloseHandlers(modal) {
    const backdrop = modal.querySelector('.textbook-modal__backdrop');
    const closeBtn = modal.querySelector('.textbook-modal__close');

    // 닫기 버튼
    if (closeBtn && !closeBtn.dataset.modalBound) {
        closeBtn.dataset.modalBound = 'true';
        closeBtn.addEventListener('click', closeTextbookModal);
    }

    // 백드롭 클릭
    if (backdrop && !backdrop.dataset.modalBound) {
        backdrop.dataset.modalBound = 'true';
        backdrop.addEventListener('click', closeTextbookModal);
    }

    // ESC 키
    if (!modal.dataset.escBound) {
        modal.dataset.escBound = 'true';
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('is-active')) {
                closeTextbookModal();
            }
        });
    }
}

// ============================================
// 모달 열기 함수
// ============================================
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
    updateModalContent(bookData);

    // 이미지 슬라이더 설정
    const images = bookData.samples && bookData.samples.length > 0
        ? bookData.samples
        : [bookData.image];

    if (typeof ModalImageSlider !== 'undefined' && ModalImageSlider.setImages) {
        ModalImageSlider.setImages(images);
    }

    // 모달 표시
    modal.classList.add('is-active', 'textbook-modal--with-slider');
    document.body.style.overflow = 'hidden';
}

// ============================================
// 모달 콘텐츠 업데이트 헬퍼
// ============================================
function updateModalContent(bookData) {
    const fields = {
        'modal-title': bookData.title,
        'modal-level': bookData.level,
        'modal-category': bookData.category,
        'modal-target': bookData.target,
        'modal-desc': bookData.description
    };

    Object.entries(fields).forEach(([id, value]) => {
        const el = document.getElementById(id);
        if (el) el.textContent = value || '';
    });

    // 특징 목록 업데이트
    const featuresContainer = document.getElementById('modal-features');
    if (featuresContainer && bookData.features) {
        featuresContainer.innerHTML = bookData.features
            .map(f => `<li>${f}</li>`)
            .join('');
    }
}

// ============================================
// 모달 닫기 함수
// ============================================
function closeTextbookModal() {
    const modal = document.getElementById('textbook-modal');
    if (modal) {
        modal.classList.remove('is-active', 'textbook-modal--with-slider');
        document.body.style.overflow = '';
    }
}

// ============================================
// 하위 호환성을 위한 래퍼 함수
// ============================================
function initTextbookGalleryModal() {
    initTextbookModal();
}

function initCurriculum9LevelModal() {
    initTextbookModal();
}

// ============================================
// 전역 함수로 내보내기 (HTMX 재초기화용)
// ============================================
window.initTextbookModal = initTextbookModal;
window.initTextbookGalleryModal = initTextbookGalleryModal;
window.initCurriculum9LevelModal = initCurriculum9LevelModal;
window.openTextbookModal = openTextbookModal;
window.closeTextbookModal = closeTextbookModal;
