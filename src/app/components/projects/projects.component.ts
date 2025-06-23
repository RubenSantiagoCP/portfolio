import {
  Component,
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren,
  Renderer2,
} from '@angular/core';
import { Project } from './Project';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'PROJECTS.PROJECTS_LIST.0.TITLE',
      description:
        'PROJECTS.PROJECTS_LIST.0.DESCRIPTION',
      image: '../../../assets/images/CONTAPP.webp',
      url_demo: 'http://contables.unicauca.edu.co/#/',
      tech: [
        '../../../assets/icons/angular.svg',
        '../../../assets/icons/tailwindcss.svg',
        '../../../assets/icons/git.svg',
        '../../../assets/icons/typescript.svg',
        '../../../assets/icons/css3-1.svg',
        '../../../assets/icons/html5.svg',
      ],
      role: 'PROJECTS.PROJECTS_LIST.0.ROLE',
    },
    {
      title: 'PROJECTS.PROJECTS_LIST.1.TITLE',
      description:
        'PROJECTS.PROJECTS_LIST.1.DESCRIPTION',
      image: '../../../assets/images/ori.webp',
      tech: [
        '../../../assets/icons/java.png',
        '../../../assets/icons/springboot.svg',
        '../../../assets/icons/springsecurity.svg',
        '../../../assets/icons/mysql.svg',
        '../../../assets/icons/git.svg',
      ],
      url_demo: "https://orii.vercel.app/",
      role: 'PROJECTS.PROJECTS_LIST.1.ROLE',
    },
    {
      title: 'PROJECTS.PROJECTS_LIST.2.TITLE',
      description:
        'PROJECTS.PROJECTS_LIST.2.DESCRIPTION',
      image: '../../../assets/images/portfolio.webp',
      url_demo: 'https://tu-proyecto.com',
      url_code: 'https://github.com/RubenSantiagoCP/portfolio',
      tech: [
        '../../../assets/icons/angular.svg',
        '../../../assets/icons/tailwindcss.svg',
        '../../../assets/icons/git.svg',
        '../../../assets/icons/typescript.svg',
        '../../../assets/icons/css3-1.svg',
        '../../../assets/icons/html5.svg',
      ],
      role: 'PROJECTS.PROJECTS_LIST.2.ROLE',
    },
    {
      title: 'PROJECTS.PROJECTS_LIST.3.TITLE',
      description:
        'PROJECTS.PROJECTS_LIST.3.DESCRIPTION',
      image: '../../../assets/images/Mentha.webp',
      tech: [
        '../../../assets/icons/angular.svg',
        '../../../assets/icons/tailwindcss.svg',
        '../../../assets/icons/typescript.svg',
        '../../../assets/icons/css3-1.svg',
        '../../../assets/icons/html5.svg',
        '../../../assets/icons/java.png',
        '../../../assets/icons/springboot.svg',
        '../../../assets/icons/springsecurity.svg',
        '../../../assets/icons/postgresql.svg',
      ],
      role: 'PROJECTS.PROJECTS_LIST.3.ROLE',
      url_code: 'https://github.com/RubenSantiagoCP/Mentha'
    },
    {
      title: 'PROJECTS.PROJECTS_LIST.4.TITLE',
      description:
        'PROJECTS.PROJECTS_LIST.4.DESCRIPTION',
      image: '../../../assets/images/aformats.webp',
      url_code: 'https://github.com/RubenSantiagoCP/App-A-Formats---Unicauca',
      tech: [
        '../../../assets/icons/java.png',
        '../../../assets/icons/springboot.svg',
        '../../../assets/icons/mysql.svg',
        '../../../assets/icons/git.svg',
      ],
      role: 'PROJECTS.PROJECTS_LIST.4.ROLE',
    },
    {
      title: 'PROJECTS.PROJECTS_LIST.5.TITLE',
      description:
        'PROJECTS.PROJECTS_LIST.5.DESCRIPTION',
      image: '../../../assets/images/bppuc.webp',
      tech: ['../../../assets/icons/figma.svg'],
      role: 'PROJECTS.PROJECTS_LIST.5.ROLE',
    },
  ];

     constructor(private translate: TranslateService) {
        const lang = localStorage.getItem('lang') || 'es';
        this.translate.setDefaultLang('es');
        this.translate.use(lang);
      }
}
