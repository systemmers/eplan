// Accordion Component

class Accordion {
    constructor(accordionElement) {
        this.accordion = accordionElement;
        this.items = this.accordion.querySelectorAll('.accordion__item');
        
        this.init();
    }
    
    init() {
        this.items.forEach((item, index) => {
            const header = item.querySelector('.accordion__header');
            
            header.addEventListener('click', () => {
                this.toggle(item);
            });
        });
    }
    
    toggle(item) {
        const isActive = item.classList.contains('is-active');
        
        // Close all items (if single mode)
        if (this.accordion.hasAttribute('data-single')) {
            this.items.forEach(i => i.classList.remove('is-active'));
        }
        
        // Toggle current item
        if (!isActive) {
            item.classList.add('is-active');
        } else {
            item.classList.remove('is-active');
        }
    }
}

// Auto-initialize accordions
document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion');
    
    accordions.forEach(accordion => {
        new Accordion(accordion);
    });
});

