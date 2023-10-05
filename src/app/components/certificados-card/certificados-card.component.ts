import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-certificados-card',
  templateUrl: './certificados-card.component.html',
  styleUrls: ['./certificados-card.component.css', 'certificados-card-responsive.component.css']
})
export class CertificadosCardComponent {
  @Input()
  nome:string=""
  @Input()
  cargaHora:string=""
  @Input()
  data:string=""
  @Input()
  linkCert:string=""
  @Input()
  img:string=""

  paragraph:string= this.data + " " + this.cargaHora + this.linkCert;
}
