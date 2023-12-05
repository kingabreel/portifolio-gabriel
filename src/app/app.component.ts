import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portifolio';

  redirect(){
    let url = 'https://ggoncalves-site.vercel.app/'

    window.location.href = url;
  }
}
