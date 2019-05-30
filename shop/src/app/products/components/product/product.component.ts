import { Component, OnInit } from '@angular/core';

enum category {
  music = 'music',
  game = 'game',
  book = 'book'
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title = 'hello world';
  name = 'name';
  description = 'description';
  price = 120;
  isAvailable = true;

  array = ['1', '2', '3', '4'];

  constructor() { }

  ngOnInit() {
  }

}
