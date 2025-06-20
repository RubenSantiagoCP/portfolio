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

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Contapp',
      description:
        'Aplicación educativa para estudiantes de contaduría, simulando un entorno contable real.',
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
      role: 'Frontend',
    },
    {
      title: 'ORII',
      description:
        'Aplicación universitaria para la Oficina de relaciones Interinstitucionales e Interculturales (ORII) de la Universidad de Cauca.',
      image: '../../../assets/images/ori.webp',
      tech: [
        '../../../assets/icons/java.png',
        '../../../assets/icons/springboot.svg',
        '../../../assets/icons/springsecurity.svg',
        '../../../assets/icons/mysql.svg',
        '../../../assets/icons/git.svg',
      ],
      role: 'Backend',
    },
    {
      title: 'Portfolio',
      description:
        'Proyecto personal para mostrar mis proyectos y experiencias en el mundo del desarrollo web.',
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
      role: 'Frontend',
    },
    {
      title: 'Mentha',
      description:
        'Aplicación web para gestionar la productividad y organizar las actividades diarias de los usuarios ',
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
      role: 'Fullstack',
    },
    {
      title: 'AFormats',
      description:
        'Proyecto universitario que permite gestionar las solicitudes de formatos A para trabajos de grado en la Universidad de Cauca.',
      image: '../../../assets/images/Mentha.webp',
      url_code: 'https://github.com/RubenSantiagoCP/App-A-Formats---Unicauca',
      tech: [
        '../../../assets/icons/java.png',
        '../../../assets/icons/springboot.svg',
        '../../../assets/icons/mysql.svg',
        '../../../assets/icons/git.svg',
      ],
      role: 'Backend',
    },
    {
      title: 'Banco de proyectos',
      description:
        'Aplicación web para gestionar los proyectos financieros del Plan de Desarrollode la Universidad de Cauca.',
      image: '../../../assets/images/bppuc.webp',
      tech: ['../../../assets/icons/figma.svg'],
      role: 'Analista',
    },
  ];
}
