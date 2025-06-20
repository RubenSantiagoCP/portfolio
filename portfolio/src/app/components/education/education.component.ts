import { Component } from '@angular/core';
import { Education } from './Education';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  lst_education: Education[] = [
    {
      title: 'Ingeniería de Sistemas',
      place: 'Universidad de Cauca - Colombia',
      year: 'Agosto 2020 - Presente',
      icon: '../../../assets/icons/logo-unicauca.png',
    },
    {
      title: 'Aplicación del Marco de Trabajo Scrum',
      place: 'SENA - Colombia',
      year: 'Agosto 2024 - Octubre 2024',
      icon: '../../../assets/icons/sena.png',
    },
    {
      title: 'CCNAv7',
      place: 'CISCO NETWORKING ACADEMY',
      year: 'Febrero 2024 - Junio 2024',
      icon: '../../../assets/icons/cisco.png',
    },
  ];
}
