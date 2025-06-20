import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScrollSpy]',
})
export class ScrollSpyDirective {
  @HostListener('window:scroll', [])
  onScroll(): void {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.sidebar-link');

    let currentSectionId = '';

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        currentSectionId = section.id;
      }
    });

    links.forEach((link) => {
      link.classList.remove('active');
      const href = link.getAttribute('href') || '';
      if (href === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }
}
