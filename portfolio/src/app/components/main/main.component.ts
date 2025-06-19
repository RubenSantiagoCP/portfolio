import { AfterViewInit, Component } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { FooterComponent } from '../footer/footer.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { EducationComponent } from '../education/education.component';

@Component({
  selector: 'app-main',
  imports: [AboutMeComponent, ContactMeComponent, ProjectsComponent, SkillsComponent, EducationComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.setupFadeOnScroll();
  }

  setupFadeOnScroll() {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
            entry.target.classList.add('faded');
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '0px',
      }
    );

    sections.forEach((section) => observer.observe(section));
  }
}
