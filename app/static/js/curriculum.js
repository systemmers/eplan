// 커리큘럼 시스템 - 네임스페이스 통합 모듈
// ePlan 프로젝트 통합 버전

/**
 * 커리큘럼 모달 네임스페이스
 * 기존 Modal 클래스와 충돌 방지를 위한 독립적인 모듈
 */
const CurriculumModal = {
    currentTextbooks: [],

    /**
     * 모달 열기
     * @param {string|array} textbookIdsOrId - 교재 ID 또는 ID 배열
     * @param {string} initialId - 초기 표시할 교재 ID
     */
    open: function(textbookIdsOrId, initialId) {
        // 배열/단일 ID 모두 처리
        const ids = Array.isArray(textbookIdsOrId) ? textbookIdsOrId : [textbookIdsOrId];

        if (ids.length === 0) return;

        this.currentTextbooks = ids;
        const displayId = initialId || ids[0];

        const data = curriculumTextbookData[displayId];
        if (!data) return;

        const modal = document.getElementById('curriculumModal');
        if (!modal) return;

        const modalTitle = modal.querySelector('.modal__title');
        const modalBody = modal.querySelector('.modal__body--curriculum');

        if (modalTitle) modalTitle.textContent = data.name;

        // 썸네일 그리드 HTML (2개 이상인 경우만)
        let thumbnailGridHtml = '';
        if (ids.length > 1) {
            thumbnailGridHtml = `
                <div class="curriculum-modal-textbook-grid">
                    <div class="curriculum-modal-textbook-grid-title">
                        📚 이 셀에 포함된 교재 (${ids.length}개)
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: var(--spacing-md);">
                        ${ids.map(id => {
                            const tbData = curriculumTextbookData[id];
                            const isActive = id === displayId ? 'is-active' : '';
                            return `
                                <div class="curriculum-modal-textbook-thumbnail ${isActive}"
                                     data-textbook-id="${id}"
                                     onclick="CurriculumModal.switchContent('${id}')">
                                    <img src="${tbData.thumbnailImage}" alt="${tbData.name}">
                                    <span>${tbData.name}</span>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        }

        let samplesHtml = '';
        if (data.samples && data.samples.length > 0) {
            samplesHtml = `
                <div class="curriculum-modal-section">
                    <h3>📄 샘플 페이지</h3>
                    <div class="curriculum-modal-samples">
                        ${data.samples.map(sample => `
                            <img src="${sample}" alt="샘플 페이지" class="curriculum-modal-sample-image" onerror="this.style.display='none'">
                        `).join('')}
                    </div>
                </div>
            `;
        }

        if (modalBody) {
            modalBody.innerHTML = `
                ${thumbnailGridHtml}
                <img src="${data.coverImage}" alt="${data.name} 표지" class="curriculum-modal-cover" onerror="this.style.display='none'">

                <div class="curriculum-modal-meta">
                    <div class="curriculum-modal-meta-item">
                        <span class="curriculum-modal-meta-label">출판사</span>
                        <span class="curriculum-modal-meta-value">${data.publisher}</span>
                    </div>
                    <div class="curriculum-modal-meta-item">
                        <span class="curriculum-modal-meta-label">레벨</span>
                        <span class="curriculum-modal-meta-value">${data.levels}</span>
                    </div>
                </div>

                <div class="curriculum-modal-section">
                    <h3>📖 교재 소개</h3>
                    <p>${data.description}</p>
                </div>

                <div class="curriculum-modal-section">
                    <h3>🎯 학습 목표</h3>
                    <ul class="curriculum-modal-objectives">
                        ${data.objectives.map(obj => `<li>${obj}</li>`).join('')}
                    </ul>
                </div>

                ${samplesHtml}
            `;
        }

        modal.classList.add('is-active');
        document.body.style.overflow = 'hidden';
    },

    /**
     * 썸네일 클릭 시 해당 교재로 전환
     * @param {string} textbookId - 교재 ID
     */
    switchContent: function(textbookId) {
        if (this.currentTextbooks.length === 0) return;

        // 동일한 모달 재호출하여 내용 교체
        this.open(this.currentTextbooks, textbookId);
    },

    /**
     * 모달 닫기
     */
    close: function() {
        const modal = document.getElementById('curriculumModal');
        if (modal) {
            modal.classList.remove('is-active');
            document.body.style.overflow = '';
        }
    },

    /**
     * 모달 이벤트 리스너 초기화
     */
    initEvents: function() {
        const modal = document.getElementById('curriculumModal');
        if (!modal) return;

        // 모달 backdrop 클릭 시 닫기
        const backdrop = modal.querySelector('.modal__backdrop');
        if (backdrop) {
            backdrop.addEventListener('click', () => this.close());
        }

        // 닫기 버튼 클릭
        const closeBtn = modal.querySelector('.modal__close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.close());
        }

        // ESC 키로 모달 닫기
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('is-active')) {
                this.close();
            }
        });
    }
};

/**
 * 커리큘럼 테이블 관리 네임스페이스
 */
const CurriculumTable = {
    /**
     * 랜덤 교재 배치 함수 (데모용)
     * 실제 프로젝트에서는 서버에서 데이터를 받아 사용
     */
    populateRandomTextbooks: function() {
        const allTextbookIds = Object.keys(curriculumTextbookData);
        const cells = document.querySelectorAll('.textbook-cell');

        cells.forEach(cell => {
            // 셀에서 기존 콘텐츠 가져오기
            const content = cell.querySelector('.textbook-cell-content');
            if (!content) return;

            const existingName = content.querySelector('.textbook-name');
            const categoryName = existingName ? existingName.textContent : '';

            // 1-5개 랜덤 개수
            const count = Math.floor(Math.random() * 5) + 1;

            // 랜덤 교재 선택
            const shuffled = [...allTextbookIds].sort(() => Math.random() - 0.5);
            const selectedIds = shuffled.slice(0, count);

            // 셀에 교재 ID 배열 저장
            cell.setAttribute('data-textbook-ids', JSON.stringify(selectedIds));
            cell.setAttribute('data-first-textbook', selectedIds[0]);

            // 이미지 컨테이너 생성
            const imagesContainer = document.createElement('div');
            imagesContainer.className = 'textbook-images';

            // 이미지 추가
            selectedIds.forEach(id => {
                const data = curriculumTextbookData[id];
                if (!data) return;

                const img = document.createElement('img');
                img.src = data.coverImage;
                img.alt = data.name;
                img.className = 'textbook-thumbnail';
                img.onerror = function() { this.style.display = 'none'; };

                // 이미지 클릭: 해당 교재만 모달 표시
                img.onclick = function(e) {
                    e.stopPropagation();
                    CurriculumModal.open([id], id);
                };
                imagesContainer.appendChild(img);
            });

            // 기존 이미지 제거하고 새로 추가
            const oldImages = content.querySelector('.textbook-images');
            if (oldImages) {
                oldImages.remove();
            }

            content.appendChild(imagesContainer);
        });

        // 셀 클릭 이벤트 등록
        this.attachCellClickEvents();
    },

    /**
     * 셀 클릭 이벤트 등록 함수
     */
    attachCellClickEvents: function() {
        // 중복 이벤트 바인딩 방지
        const cells = document.querySelectorAll('.textbook-cell:not([data-events-bound])');

        cells.forEach(cell => {
            // 기존 onclick 속성 제거
            cell.removeAttribute('onclick');

            const textbookIdsJson = cell.getAttribute('data-textbook-ids');
            if (!textbookIdsJson) return;

            let ids;
            try {
                ids = JSON.parse(textbookIdsJson);
            } catch (e) {
                console.error('교재 ID 파싱 오류:', e);
                return;
            }

            if (!ids || ids.length === 0) return;

            const firstTextbook = cell.getAttribute('data-first-textbook') || ids[0];

            // 셀 클릭 이벤트 등록
            cell.addEventListener('click', function(e) {
                // 이미지 클릭은 별도 처리하므로 무시
                if (e.target.classList.contains('textbook-thumbnail')) return;
                CurriculumModal.open(ids, firstTextbook);
            });

            // 썸네일 이미지 클릭 이벤트 등록
            const thumbnails = cell.querySelectorAll('.textbook-thumbnail');
            thumbnails.forEach((img, index) => {
                img.style.cursor = 'pointer';
                img.addEventListener('click', function(e) {
                    e.stopPropagation();
                    // 해당 이미지의 교재 ID로 모달 열기
                    const targetId = ids[index] || ids[0];
                    CurriculumModal.open(ids, targetId);
                });
            });

            // 중복 바인딩 방지 마킹
            cell.setAttribute('data-events-bound', 'true');
        });
    }
};

/**
 * 커리큘럼 시스템 초기화
 * DOMContentLoaded 및 HTMX afterSwap 이벤트에서 호출
 */
function initCurriculumSystem() {
    // 모달 이벤트 초기화
    CurriculumModal.initEvents();

    // 랜덤 교재 배치 (데모용 - 실제로는 서버 데이터 사용)
    // CurriculumTable.populateRandomTextbooks();

    // 셀 클릭 이벤트 등록
    CurriculumTable.attachCellClickEvents();
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', initCurriculumSystem);

// HTMX 호환성 - 동적 콘텐츠 로드 시에도 초기화
if (typeof htmx !== 'undefined') {
    document.body.addEventListener('htmx:afterSwap', initCurriculumSystem);
}
