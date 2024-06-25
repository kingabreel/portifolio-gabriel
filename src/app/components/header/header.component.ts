import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './header-responsive.component.css']
})
export class HeaderComponent {

  constructor(private router: Router){}
  returnHome(){
    this.router.navigate(['/'])
  }
  ngAfterViewInit() {
    document.getElementById('home-button')?.addEventListener('click', () => {
      this.router.navigate(['/']); 
    });

    document.getElementById('about-me-button')?.addEventListener('click', () => {
      this.router.navigate(['/sobre']); 
    });

    document.getElementById('projects-button')?.addEventListener('click', () => {
      this.router.navigate(['/projetos']); 
    });

    document.getElementById('contact-button')?.addEventListener('click', () => {
      this.router.navigate(['/contato']); 
    });
  }
}
