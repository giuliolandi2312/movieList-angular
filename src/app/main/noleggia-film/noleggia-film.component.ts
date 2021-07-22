import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noleggia-film',
  templateUrl: './noleggia-film.component.html',
  styleUrls: ['./noleggia-film.component.css']
})
export class NoleggiaFilmComponent implements OnInit {
  title: string = 'Noleggia film';

  quantity: number = 0;
  price: number = 10;
  discount: number = 25;

  total: number = 0;

  constructor() { }

  calculate(q: any) {
    let subtotal = q * this.price;
    let totaldiscount = (subtotal * 25) / 100;
    this.total = subtotal - totaldiscount;
  }
  

  ngOnInit(): void {
  }

}
