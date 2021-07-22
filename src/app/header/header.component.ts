import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie-list';
import { MOVIES } from '../mock-movie';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'movieList';
  selected: string = '';
  movies: Array<Movie> = MOVIES;
  selectedmovie!: any;
  moviedId:any;
  lastId:any;


  constructor() { }

  showcontent(type:string): void {
    this.selected = type;
  }

  ngOnInit(): void {
  }

}
