import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent {
  @ViewChild('spriteImage') spriteImage!: ElementRef;
  feedbackGive:boolean=false

  constructor(private renderer: Renderer2){}

  onMouseOverEsq() {
    this.renderer.setAttribute(this.spriteImage.nativeElement, 'src', 'assets/sprites/dedoEsq.png');
  }
  onMouseOverDir() {
    this.renderer.setAttribute(this.spriteImage.nativeElement, 'src', 'assets/sprites/dedoDir.png');
  }
  onMouseOut() {
    this.renderer.setAttribute(this.spriteImage.nativeElement, 'src', 'assets/sprites/gifs/paradoC.gif');
  }
  onClickFunc(){
    this.feedbackGive = true
  }
}
