import { Component } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  currentSection = 0;
  lastSection = 0;

  selectSection(index: number) {
    this.lastSection = this.currentSection;
    this.currentSection = index;
  }
}
