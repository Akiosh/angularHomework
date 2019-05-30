import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;

  constructor() { }

  ngOnInit() {
  }

  onBuy(event: any) {
    console.log(event);
    console.log(`buy ${this.product.name}\n___________________`);
  }

}
