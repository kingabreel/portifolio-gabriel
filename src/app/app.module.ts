import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './components/main/main.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { TituloParagrafoComponent } from './components/titulo-paragrafo/titulo-paragrafo.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillBarComponent } from './components/skill-bar/skill-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemListComponent,
    HomeComponent,
    MainComponent,
    PerfilComponent,
    TituloParagrafoComponent,
    RodapeComponent,
    SkillsComponent,
    SkillBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
