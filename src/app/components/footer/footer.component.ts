import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  year: number = new Date().getFullYear();
  footer_text: string = this.year + ' FOOTER.YEAR';

  constructor(private translate: TranslateService) {
    const lang = localStorage.getItem('lang') || 'es';
    this.translate.setDefaultLang('es');
    this.translate.use(lang);
  }


}
