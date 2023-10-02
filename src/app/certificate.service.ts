import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificadosService {
  private apiUrl = 'https://conexao-bancodadosnode-production.up.railway.app/certificados'; 

  constructor(private http: HttpClient) {}

  getCertificates(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
