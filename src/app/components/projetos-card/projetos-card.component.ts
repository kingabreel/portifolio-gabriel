import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projetos-card',
  templateUrl: './projetos-card.component.html',
  styleUrls: ['./projetos-card.component.css']
})
export class ProjetosCardComponent {
  @Input()
  img:string=""
  @Input()
  titulo:string=""
  @Input()
  descricao:string=""
}
