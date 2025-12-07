// ============================================
// Textbook Accordion Component
// ============================================

// 아코디언용 교재 데이터는 textbookData.js에서 관리
// getAccordionTextbooks() 함수를 사용하여 데이터 접근
// 레거시 호환을 위한 래퍼 객체 (textbookData.js 의존)
const textbookAccordionData = {
    get general() { return typeof getAccordionTextbooks === 'function' ? getAccordionTextbooks('general') : []; },
    get business() { return typeof getAccordionTextbooks === 'function' ? getAccordionTextbooks('business') : []; },
    get test() { return typeof getAccordionTextbooks === 'function' ? getAccordionTextbooks('test') : []; },
    get discussion() { return typeof getAccordionTextbooks === 'function' ? getAccordionTextbooks('discussion') : []; }
};

// ============================================
// Textbook Accordion Helper Functions
// ============================================

// 별점 생성 함수
function generateStarRating(rating) {
    let starsHtml = '';
    for (let i = 0; i < 5; i++) {
        const filled = i < Math.floor(rating);
        starsHtml += `
            <svg class="book-detail__rating-star ${filled ? 'book-detail__rating-star--filled' : 'book-detail__rating-star--empty'}"
                 viewBox="0 0 24 24">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
        `;
    }
    return `
        <div class="book-detail__rating">
            <div class="book-detail__rating-stars">${starsHtml}</div>
            <span class="book-detail__rating-value">${rating}</span>
        </div>
    `;
}

// 특징 목록 생성 함수
function generateFeaturesList(features) {
    return features.map(feature => `<li>${feature}</li>`).join('');
}

// 상세 패널 업데이트 함수
function updateBookDetailPanel(panel, book) {
    if (!panel || !book) return;

    panel.innerHTML = `
        <div class="book-detail">
            <div class="book-detail__header">
                <div class="book-detail__icon">
                    <svg viewBox="0 0 24 24">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                    </svg>
                </div>
                <div>
                    <span class="book-detail__level">${book.level}</span>
                    <h4 class="book-detail__title">${book.title}</h4>
                </div>
            </div>

            <div class="book-detail__meta">
                <div class="book-detail__meta-item">
                    <svg viewBox="0 0 24 24">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                    </svg>
                    <span>${book.author}</span>
                </div>
                <div class="book-detail__meta-item">
                    <svg viewBox="0 0 24 24">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    <span>${book.publisher} · ${book.year}</span>
                </div>
            </div>

            ${generateStarRating(book.rating)}

            <div class="book-detail__section">
                <h5 class="book-detail__section-title">교재 소개</h5>
                <p class="book-detail__desc">${book.description}</p>
            </div>

            <div class="book-detail__section">
                <h5 class="book-detail__section-title">주요 특징</h5>
                <ul class="book-detail__features">
                    ${generateFeaturesList(book.features)}
                </ul>
            </div>
        </div>
    `;
}

// 활성 아이템 설정 함수
function setActiveAccordionItem(items, activeIndex) {
    items.forEach((item, idx) => {
        if (idx === activeIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// 아코디언 초기화 함수
function initTextbookAccordions() {
    const accordions = document.querySelectorAll('.book-accordion');

    accordions.forEach(accordion => {
        // 이미 초기화되었으면 스킵
        if (accordion.dataset.accordionBound) return;
        accordion.dataset.accordionBound = 'true';

        const category = accordion.dataset.category;
        const items = accordion.querySelectorAll('.book-accordion-item');
        const detailPanel = document.getElementById(`detail-${category}`);

        // 데이터 확인
        if (!textbookAccordionData[category]) {
            console.warn(`No data found for category: ${category}`);
            return;
        }

        // 초기 상태: 첫 번째 항목 표시
        updateBookDetailPanel(detailPanel, textbookAccordionData[category][0]);

        // 이벤트 리스너 등록
        items.forEach((item, index) => {
            // 마우스 오버 이벤트
            item.addEventListener('mouseenter', function() {
                setActiveAccordionItem(items, index);
                updateBookDetailPanel(detailPanel, textbookAccordionData[category][index]);
            });

            // 클릭 이벤트 (모바일용)
            item.addEventListener('click', function() {
                setActiveAccordionItem(items, index);
                updateBookDetailPanel(detailPanel, textbookAccordionData[category][index]);
            });
        });
    });
}

// 전역 함수로 내보내기 (HTMX 재초기화용)
window.initTextbookAccordions = initTextbookAccordions;
