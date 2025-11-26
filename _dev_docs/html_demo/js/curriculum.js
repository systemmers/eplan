// 커리큘럼 테이블 관리 모듈

/**
 * 랜덤 교재 배치 함수
 */
function populateRandomTextbooks() {
    const allTextbookIds = Object.keys(textbookData);
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
            const data = textbookData[id];
            const img = document.createElement('img');
            img.src = data.coverImage;
            img.alt = data.name;
            img.className = 'textbook-thumbnail';
            img.onerror = function() { this.style.display = 'none'; };

            // 이미지 클릭: 해당 교재만 모달 표시
            img.onclick = function(e) {
                e.stopPropagation();
                openModal([id], id);
            };
            imagesContainer.appendChild(img);
        });

        // 기존 이미지 제거하고 새로 추가
        const oldImg = content.querySelector('.textbook-thumbnail');
        if (oldImg) {
            oldImg.remove();
        }

        content.appendChild(imagesContainer);
    });

    // 셀 클릭 이벤트 등록
    attachCellClickEvents();
}

/**
 * 셀 클릭 이벤트 등록 함수
 */
function attachCellClickEvents() {
    const cells = document.querySelectorAll('.textbook-cell');

    cells.forEach(cell => {
        // 기존 onclick 속성 제거
        cell.removeAttribute('onclick');

        // 새 클릭 이벤트 등록
        cell.addEventListener('click', function() {
            const textbookIdsJson = this.getAttribute('data-textbook-ids');
            const firstTextbook = this.getAttribute('data-first-textbook');

            if (textbookIdsJson) {
                const ids = JSON.parse(textbookIdsJson);
                // 셀 클릭: 모든 교재 전달, 첫 번째 교재를 초기 표시
                openModal(ids, firstTextbook || ids[0]);
            }
        });
    });
}

/**
 * 페이지 로드 시 초기화
 */
function initCurriculum() {
    // 페이지 로드 시 랜덤 교재 배치
    window.addEventListener('DOMContentLoaded', populateRandomTextbooks);
}
