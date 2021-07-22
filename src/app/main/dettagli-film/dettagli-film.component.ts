import { Component, Input, OnInit } from '@angular/core';
import { Movie  } from '../../movie-list';

import { MOVIES } from '../../mock-movie';

@Component({
  selector: 'app-dettagli-film',
  templateUrl: './dettagli-film.component.html',
  styleUrls: ['./dettagli-film.component.css']
})
export class DettagliFilmComponent implements OnInit {
  @Input() movie!:Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
