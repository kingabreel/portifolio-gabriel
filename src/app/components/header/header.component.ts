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

      this.closeMenu();
    });

    document.getElementById('about-me-button')?.addEventListener('click', () => {
      this.router.navigate(['/sobre']); 

      this.closeMenu();
    });

    document.getElementById('projects-button')?.addEventListener('click', () => {
      this.router.navigate(['/projetos']); 

      this.closeMenu();
    });

    document.getElementById('contact-button')?.addEventListener('click', () => {
      this.router.navigate(['/contato']); 

      this.closeMenu();
    });

    document.getElementsByClassName('menu')[0]?.addEventListener('click', () => {
      const buttonsDiv = document.getElementsByClassName('header-buttons')[0];
      const logo = document.getElementsByClassName('logo')[0];
      const menu = document.getElementsByClassName('menu')[0];
      const header = document.getElementsByClassName('header')[0];

      if (buttonsDiv) {
        buttonsDiv.classList.toggle('active');
      }
      if (logo) {
        logo.classList.toggle('active');
      }
      if (menu) {
        menu.classList.toggle('active');
      }
      if (header) {
        header.classList.toggle('active');
      }
    });
  }

  closeMenu() {
    const buttonsDiv = document.getElementsByClassName('header-buttons')[0];
    const logo = document.getElementsByClassName('logo')[0];
    const menu = document.getElementsByClassName('menu')[0];
    const header = document.getElementsByClassName('header')[0];

    if(header.className.endsWith('active')) {
      header.classList.remove('active');
      logo.classList.remove('active');
      menu.classList.remove('active');
      buttonsDiv.classList.remove('active');
    }
  }
}
