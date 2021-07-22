import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ListaFilmComponent } from './main/lista-film/lista-film.component';
import { NoleggiaFilmComponent } from './main/noleggia-film/noleggia-film.component';
import { DettagliFilmComponent } from './main/dettagli-film/dettagli-film.component';
import { ModificaFilmComponent } from './main/modifica-film/modifica-film.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AggiungiFilmComponent } from './main/aggiungi-film/aggiungi-film.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ListaFilmComponent,
    NoleggiaFilmComponent,
    DettagliFilmComponent,
    ModificaFilmComponent,
    FooterComponent,
    AggiungiFilmComponent


  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
