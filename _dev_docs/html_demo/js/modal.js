// 모달 관리 모듈
let currentModalTextbooks = [];

/**
 * 모달 열기
 * @param {string|array} textbookIdsOrId - 교재 ID 또는 ID 배열
 * @param {string} initialId - 초기 표시할 교재 ID
 */
function openModal(textbookIdsOrId, initialId) {
    // 배열/단일 ID 모두 처리
    const ids = Array.isArray(textbookIdsOrId) ? textbookIdsOrId : [textbookIdsOrId];

    if (ids.length === 0) return;

    currentModalTextbooks = ids;
    const displayId = initialId || ids[0];

    const data = textbookData[displayId];
    if (!data) return;

    const modalContent = document.getElementById('modalContent');
    const modalTitle = document.getElementById('modalTitle');

    modalTitle.textContent = data.name;

    // 썸네일 그리드 HTML (2개 이상인 경우만)
    let thumbnailGridHtml = '';
    if (ids.length > 1) {
        thumbnailGridHtml = `
            <div style="margin-bottom: var(--spacing-lg);">
                <div class="modal-textbook-grid-title">
                    📚 이 셀에 포함된 교재 (${ids.length}개)
                </div>
                <div class="modal-textbook-grid">
                    ${ids.map(id => {
                        const tbData = textbookData[id];
                        const isActive = id === displayId ? 'active' : '';
                        return `
                            <div class="modal-textbook-thumbnail ${isActive}"
                                 data-textbook-id="${id}"
                                 onclick="switchModalContent('${id}')">
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
            <div class="modal-section">
                <h3>📄 샘플 페이지</h3>
                <div class="modal-samples">
                    ${data.samples.map(sample => `
                        <img src="${sample}" alt="샘플 페이지" class="modal-sample-image" onerror="this.style.display='none'">
                    `).join('')}
                </div>
            </div>
        `;
    }

    modalContent.innerHTML = `
        ${thumbnailGridHtml}
        <img src="${data.coverImage}" alt="${data.name} 표지" class="modal-cover-image" onerror="this.style.display='none'">

        <div class="modal-meta">
            <div class="modal-meta-item">
                <span class="modal-meta-label">출판사</span>
                <span class="modal-meta-value">${data.publisher}</span>
            </div>
            <div class="modal-meta-item">
                <span class="modal-meta-label">레벨</span>
                <span class="modal-meta-value">${data.levels}</span>
            </div>
        </div>

        <div class="modal-section">
            <h3>📖 교재 소개</h3>
            <p>${data.description}</p>
        </div>

        <div class="modal-section">
            <h3>🎯 학습 목표</h3>
            <ul class="modal-objectives">
                ${data.objectives.map(obj => `<li>${obj}</li>`).join('')}
            </ul>
        </div>

        ${samplesHtml}
    `;

    const modal = document.getElementById('textbookModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * 썸네일 클릭 시 해당 교재로 전환
 * @param {string} textbookId - 교재 ID
 */
function switchModalContent(textbookId) {
    if (currentModalTextbooks.length === 0) return;

    // 동일한 모달 재호출하여 내용 교체
    openModal(currentModalTextbooks, textbookId);
}

/**
 * 모달 닫기
 */
function closeModal() {
    const modal = document.getElementById('textbookModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

/**
 * 모달 이벤트 리스너 초기화
 */
function initModalEvents() {
    // 모달 외부 클릭 시 닫기
    document.getElementById('textbookModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });

    // ESC 키로 모달 닫기
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}
