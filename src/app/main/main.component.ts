import { Component, OnInit} from '@angular/core';
import { Movie  } from '../movie-list';

import { MOVIES } from '../mock-movie';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{


  title: string = 'movieList';
  selected: string = '';
  movies: Array<Movie> = MOVIES;
  selectedmovie!: any;
  moviedId:any;
  lastId:any;



  updateMovie(movie:any) {
    console.log(movie);
    let index = this.movies.findIndex((value)=>{
      return value.id === movie.id;
    });
    for(let prop in movie){
      this.movies[index][prop] = movie[prop];
    }
  }


    editDetail(movieId:any){
    console.log(movieId);
    this.selectedmovie = this.movies.find((value)=>{
      return value.id === movieId;
    });
    this.selected = 'edit';
    console.log(this.selectedmovie.title);
  }

  viewDetail(movieId:any){
    console.log(movieId);
    this.selectedmovie = this.movies.find((value)=>{
      return value.id === movieId;
    });
    this.selected = 'detail';
    console.log(this.selectedmovie.title);
  }

  addMovie(newmovie:any){
    newmovie.image = 'assets/images/'+newmovie.image
    this.movies.push(newmovie);
    this.selected = 'list'
  }



  showcontent(type:string): void {
    this.selected = type;


    
  }

  ngOnInit(){
    this.lastId = Math.max(...this.movies.map((val) => val.id));
  }

}
