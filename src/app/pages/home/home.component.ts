import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', 'home-responsive.component.css'],
})
export class HomeComponent {

  currentSection = 0;
  lastSection = -1;

  ngOnInit(){
    document.body.style.overflowX = 'hidden';
  }
  selectSection(index: number) {
    this.lastSection = this.currentSection;
    this.currentSection = index;
  }
}
