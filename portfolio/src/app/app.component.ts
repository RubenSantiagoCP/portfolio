import { Component, OnInit} from '@angular/core';
import { ThreeBackgroundService } from './services/three-background.service';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MainComponent } from './components/main/main.component';

@Component({
  selector: 'app-root',
  imports: [SideBarComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  constructor(private threeBackgroundService: ThreeBackgroundService) {}

  ngOnInit(): void {
    this.threeBackgroundService.init('stars-container');
  }
}
