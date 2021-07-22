import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modifica-film',
  templateUrl: './modifica-film.component.html',
  styleUrls: ['./modifica-film.component.css']
})
export class ModificaFilmComponent implements OnInit {

  @Input() movie:any;
  @Output() movieupdated = new EventEmitter<any>();
  mymovie:any;

  constructor() { }

  resetMovie(){
    this.mymovie = Object.assign({},this.movie);
  }

  update(){
    console.log(this.mymovie);
    this.movieupdated.emit(this.mymovie);
  }
  

  ngOnInit(): void {
    this.resetMovie();
  }

}
