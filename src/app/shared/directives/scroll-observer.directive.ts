import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appScrollObserver]',
  standalone: true
})
export class ScrollObserverDirective implements AfterViewInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {
      this.setupObserver();
  }

  private setupObserver(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.05
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'show-card');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(this.el.nativeElement);
  }
}
