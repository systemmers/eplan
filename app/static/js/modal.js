// Modal Component

class Modal {
    constructor(modalId) {
        this.modal = document.getElementById(modalId);
        if (!this.modal) return;
        
        this.backdrop = this.modal.querySelector('.modal__backdrop');
        this.closeBtn = this.modal.querySelector('.modal__close');
        
        this.init();
    }
    
    init() {
        // Close on backdrop click
        if (this.backdrop) {
            this.backdrop.addEventListener('click', () => this.close());
        }
        
        // Close on close button click
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => this.close());
        }
        
        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('is-active')) {
                this.close();
            }
        });
    }
    
    open() {
        this.modal.classList.add('is-active');
        document.body.style.overflow = 'hidden';
    }
    
    close() {
        this.modal.classList.remove('is-active');
        document.body.style.overflow = '';
    }
}

// Modal initialization function
function initModals() {
    const modalTriggers = document.querySelectorAll('[data-modal-target]');
    
    modalTriggers.forEach(trigger => {
        // Prevent duplicate event binding
        if (trigger.dataset.modalBound) return;
        trigger.dataset.modalBound = 'true';
        
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = trigger.getAttribute('data-modal-target');
            const modal = new Modal(modalId);
            modal.open();
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initModals);

// Re-initialize after HTMX partial page load
document.body.addEventListener('htmx:afterSwap', initModals);

