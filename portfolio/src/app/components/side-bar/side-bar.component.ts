import { Component } from '@angular/core';
import { PlanetComponent } from '../planet/planet.component';

@Component({
  selector: 'app-side-bar',
  imports: [PlanetComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

}
