import { Component } from '@angular/core';
import { Education } from './Education';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-education',
  imports: [CommonModule, TranslateModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  lst_education: Education[] = [
    {
      title: 'EDUCATION.LST_EDUCATION.0.TITLE',
      place: 'Universidad de Cauca - Colombia',
      year: 'EDUCATION.LST_EDUCATION.0.YEAR',
      icon: '../../../assets/icons/logo-unicauca.png',
    },
    {
      title: 'EDUCATION.LST_EDUCATION.1.TITLE',
      place: 'SENA - Colombia',
      year: 'EDUCATION.LST_EDUCATION.1.YEAR',
      icon: '../../../assets/icons/sena.png',
    },
    {
      title: 'CCNAv7',
      place: 'CISCO NETWORKING ACADEMY',
      year: 'EDUCATION.LST_EDUCATION.2.YEAR',
      icon: '../../../assets/icons/cisco.png',
    },
  ];

  
    constructor(private translate: TranslateService) {
      const lang = localStorage.getItem('lang') || 'es';
      this.translate.setDefaultLang('es');
      this.translate.use(lang);
    }
}
