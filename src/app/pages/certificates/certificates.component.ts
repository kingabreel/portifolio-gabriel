import { Component } from '@angular/core';
import { CertificadosService } from 'src/app/certificate.service'; 

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {
  certificates!: any[]; 

  constructor(private certServ: CertificadosService) {}

  ngOnInit() {
    this.getCertificates();
  }

  getCertificates() {
    this.certServ.getCertificates()
      .subscribe(certificates => {
        this.certificates = certificates;
        console.log(this.certificates);
      });
  }
}
