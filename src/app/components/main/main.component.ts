import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  @Input()
  categoria:string="teste"

  currentSection = 0;
  lastSection = -1;

  ngOnInit(){
    document.body.style.overflowX = 'hidden';

    setInterval(() => {
      this.moveToNextSection();
    }, 5000);
  }
  selectSection(index: number) {
    this.lastSection = this.currentSection;
    this.currentSection = index;
  }

  moveToNextSection() {
    const nextSection = (this.currentSection + 1) % 3; 
    this.selectSection(nextSection);
  }
}