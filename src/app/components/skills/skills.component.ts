import { Component } from '@angular/core';
import { Skill } from './Skill';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  lst_skills: Skill[] = [
    {
      name: 'Java',
      level: 'Medio',
      icon: '../../../assets/icons/java.png',
    },
    {
      name: 'Spring Boot',
      level: 'Medio',
      icon: '../../../assets/icons/springboot.svg',
    },
    {
      name: 'Angular',
      level: 'Medio',
      icon: '../../../assets/icons/angular.svg',
    },
    {
      name: 'SQL',
      level: 'Medio',
      icon: '../../../assets/icons/database.svg',
    },
    {
      name: 'HTML5',
      level: 'Avanzado',
      icon: '../../../assets/icons/html5.svg',
    },
    {
      name: 'JavaScript',
      level: 'Medio',
      icon: '../../../assets/icons/javascript.svg',
    },
    {
      name: 'CSS3',
      level: 'Medio',
      icon: '../../../assets/icons/css3-1.svg',
    },
    {
      name: 'TypeScript',
      level: 'Medio',
      icon: '../../../assets/icons/typescript.svg',
    },
    {
      name: 'Python',
      level: 'Básico',
      icon: '../../../assets/icons/python.svg',
    },
    {
      name: 'SQL',
      level: 'Medio',
      icon: '../../../assets/icons/database.svg',
    },
    {
      name: 'Spring Security',
      level: 'Básico',
      icon: '../../../assets/icons/springsecurity.svg',
    },
    {
      name: 'Tailwind CSS',
      level: 'Medio',
      icon: '../../../assets/icons/tailwindcss.svg',
    },
    {
      name: 'Git',
      level: 'Medio',
      icon: '../../../assets/icons/git.svg',
    },
    {
      name: 'GitHub',
      level: 'Medio',
      icon: '../../../assets/icons/github.svg',
    },
    {
      name: 'Figma',
      level: 'Medio',
      icon: '../../../assets/icons/figma.svg',
    },
    {
      name: 'MySQL',
      level: 'Medio',
      icon: '../../../assets/icons/mysql.svg',
    },
    {
      name: 'PostgreSQL',
      level: 'Medio',
      icon: '../../../assets/icons/postgresql.svg',
    },
    {
      name: 'Postman',
      level: 'Medio',
      icon: '../../../assets/icons/postman.svg',
    },
    {
      name: 'Slack',
      level: 'Medio',
      icon: '../../../assets/icons/slack.svg',
    },
    {
      name: 'Swagger',
      level: 'Medio',
      icon: '../../../assets/icons/swagger.svg',
    },
    {
      name: 'Trello',
      level: 'Medio',
      icon: '../../../assets/icons/trello.svg',
    },
  ];

  ngOnInit() {
    AOS.init({ duration: 10000, once: false });
  }

  ngAfterViewInit() {
    AOS.refresh(); // fuerza AOS a escanear de nuevo el DOM
  }

  constructor(private translate: TranslateService) {
    const lang = localStorage.getItem('lang') || 'es';
    this.translate.setDefaultLang('es');
    this.translate.use(lang);
  }
}
