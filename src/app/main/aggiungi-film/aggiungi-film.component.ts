import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aggiungi-film',
  templateUrl: './aggiungi-film.component.html',
  styleUrls: ['./aggiungi-film.component.css']
})
export class AggiungiFilmComponent implements OnInit {
  @Input() lastId:any;
  @Output() addmovie = new EventEmitter<any>();
  newmovie:any;
  

  constructor() { }
  create() {
    this.addmovie.emit(this.newmovie)
  }
  


  ngOnInit(): void {
    this.newmovie= 
    {
      id: '7',
      title: '',
      image: '',
      plot: '',
      cast:''
    }
  
  }

}
