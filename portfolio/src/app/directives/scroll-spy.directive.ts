import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScrollSpy]'
})
export class ScrollSpyDirective {
  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.sidebar-link');

    let currentSectionId = '';

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom >= 150) {
        currentSectionId = section.id;
      }
    });

    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }
}
