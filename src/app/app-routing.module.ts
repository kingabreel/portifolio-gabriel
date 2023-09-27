import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CertificatesComponent } from './pages/certificates/certificates.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { AndamentoComponent } from './pages/andamento/andamento.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'certificados', component: CertificatesComponent},
  {path:'projetos', component: ProjetosComponent},
  {path:'contato', component: ContatoComponent},
  {path: 'andamento', component: AndamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
