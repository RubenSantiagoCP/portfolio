import { Component } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';

@Component({
  selector: 'app-main',
  imports: [AboutMeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
