import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Movie } from 'src/app/movie-list';
import { MOVIES} from '../../mock-movie';


@Component({
  selector: 'app-lista-film',
  templateUrl: './lista-film.component.html',
  styleUrls: ['./lista-film.component.css']
})
export class ListaFilmComponent implements OnInit {

  @Input() movielist!:typeof MOVIES[]; 
  @Output() showmovie = new EventEmitter<any>();
  @Output() editmovie = new EventEmitter<any>();

  filmDetailId: any = null;


  
  constructor() { }



  viewDetail(id:number){
    this.filmDetailId = id;
    this.showmovie.emit(this.filmDetailId);
  }
  
  editDetail(id:number){
    this.filmDetailId = id;
    this.editmovie.emit(this.filmDetailId);
  }



  addItem(event:Event) {
    console.log(event);
  }

  ngOnInit(): void {
  }

}
