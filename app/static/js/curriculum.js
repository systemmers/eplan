// 커리큘럼 시스템 - 모달 제거 버전
// ePlan 프로젝트 - 교재 셀 표시 전용 (클릭 비활성화)

/**
 * 커리큘럼 테이블 관리 네임스페이스
 * 모달 기능 제거됨 - 교재 정보 표시만 담당
 */
const CurriculumTable = {
    /**
     * 랜덤 교재 배치 함수 (데모용)
     * 실제 프로젝트에서는 서버에서 데이터를 받아 사용
     */
    populateRandomTextbooks: function() {
        // 통합된 데이터 소스 사용
        const textbooks = (typeof textbookData !== 'undefined' && textbookData.textbooks)
            ? textbookData.textbooks
            : (typeof curriculumTextbookData !== 'undefined' ? curriculumTextbookData : {});

        const allTextbookIds = Object.keys(textbooks);
        const cells = document.querySelectorAll('.textbook-cell');

        cells.forEach(cell => {
            const content = cell.querySelector('.textbook-cell-content');
            if (!content) return;

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

            // 이미지 추가 (클릭 이벤트 없음)
            selectedIds.forEach(id => {
                const data = textbooks[id];
                if (!data) return;

                const img = document.createElement('img');
                img.src = data.coverImage || data.image;
                img.alt = data.name || data.title;
                img.className = 'textbook-thumbnail';
                img.onerror = function() { this.style.display = 'none'; };

                imagesContainer.appendChild(img);
            });

            // 기존 이미지 제거하고 새로 추가
            const oldImages = content.querySelector('.textbook-images');
            if (oldImages) {
                oldImages.remove();
            }

            content.appendChild(imagesContainer);
        });

        // 셀 클릭 비활성화
        this.disableCellClicks();
    },

    /**
     * 셀 클릭 이벤트 비활성화
     * 모달 기능 제거로 인해 클릭 동작 없음
     */
    disableCellClicks: function() {
        const cells = document.querySelectorAll('.textbook-cell');

        cells.forEach(cell => {
            // 기존 onclick 속성 제거
            cell.removeAttribute('onclick');

            // 클릭 이벤트 방지용 마킹
            cell.setAttribute('data-modal-disabled', 'true');
        });
    }
};

/**
 * 커리큘럼 시스템 초기화
 * DOMContentLoaded 및 HTMX afterSwap 이벤트에서 호출
 */
function initCurriculumSystem() {
    // 셀 클릭 비활성화
    CurriculumTable.disableCellClicks();
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', initCurriculumSystem);

// HTMX 호환성 - 동적 콘텐츠 로드 시에도 초기화
document.body.addEventListener('htmx:afterSwap', function(event) {
    // main-content가 업데이트되었을 때만 재초기화
    if (event.detail.target.id === 'main-content') {
        initCurriculumSystem();
    }
});
