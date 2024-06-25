import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { TituloParagrafoComponent } from './components/titulo-paragrafo/titulo-paragrafo.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillBarComponent } from './components/skill-bar/skill-bar.component';
import { ProjetosCardComponent } from './components/projetos-card/projetos-card.component';
import { CorpoDestaqueComponent } from './components/corpo-destaque/corpo-destaque.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemListComponent,
    PerfilComponent,
    TituloParagrafoComponent,
    SkillsComponent,
    SkillBarComponent,
    ProjetosCardComponent,
    CorpoDestaqueComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
