import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { ProductModel } from '../../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList$: Observable<ProductModel[]>;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productList$ = this.productService.getProducts();
  }

}
