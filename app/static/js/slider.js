// Simple Slider Component

class Slider {
    constructor(sliderElement) {
        this.slider = sliderElement;
        this.slides = this.slider.querySelectorAll('.slider__slide');
        this.prevBtn = this.slider.querySelector('.slider__prev');
        this.nextBtn = this.slider.querySelector('.slider__next');
        this.dotsContainer = this.slider.querySelector('.slider__dots');
        
        this.currentSlide = 0;
        this.totalSlides = this.slides.length;
        
        this.init();
    }
    
    init() {
        if (this.totalSlides === 0) return;
        
        // Create dots
        if (this.dotsContainer) {
            this.createDots();
        }
        
        // Navigation buttons
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prev());
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.next());
        }
        
        // Show first slide
        this.showSlide(0);
        
        // Auto-play if enabled
        if (this.slider.hasAttribute('data-autoplay')) {
            const interval = this.slider.getAttribute('data-autoplay') || 5000;
            this.startAutoPlay(parseInt(interval));
        }
    }
    
    createDots() {
        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('button');
            dot.classList.add('slider__dot');
            dot.addEventListener('click', () => this.goToSlide(i));
            this.dotsContainer.appendChild(dot);
        }
    }
    
    showSlide(index) {
        // Hide all slides
        this.slides.forEach(slide => {
            slide.style.display = 'none';
        });
        
        // Show current slide
        this.slides[index].style.display = 'block';
        
        // Update dots
        if (this.dotsContainer) {
            const dots = this.dotsContainer.querySelectorAll('.slider__dot');
            dots.forEach(dot => dot.classList.remove('is-active'));
            dots[index].classList.add('is-active');
        }
        
        this.currentSlide = index;
    }
    
    next() {
        const nextSlide = (this.currentSlide + 1) % this.totalSlides;
        this.showSlide(nextSlide);
    }
    
    prev() {
        const prevSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.showSlide(prevSlide);
    }
    
    goToSlide(index) {
        this.showSlide(index);
    }
    
    startAutoPlay(interval) {
        setInterval(() => {
            this.next();
        }, interval);
    }
}

// Auto-initialize sliders
document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider');
    
    sliders.forEach(slider => {
        new Slider(slider);
    });
});

