import { Injectable } from '@angular/core';

import { ProductModel } from '../model/product.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

const ProductList: ProductModel[] = [
  new ProductModel(1, 'name1', 'description1', 111, true, 'category1'),
  new ProductModel(2, 'name2', 'description2', 222, true, 'category2'),
  new ProductModel(3, 'name3', 'description3', 333, false, 'category3'),
  new ProductModel(4, 'name4', 'description4', 444, true, 'category4')
];

const ProductListStream: Observable<ProductModel[]> = of(ProductList);

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<ProductModel[]> {
    return ProductListStream;
  }

  getProductById(id: number | string) {
    return this.getProducts()
      .pipe(
        map((productList: ProductModel[]) => productList.find(product => product.id === +id))
      );
  }

  getProductByName(name: string) {
    return this.getProducts()
      .pipe(
        map((productList: ProductModel[]) => productList.map(product => product.name === name))
      );
  }
}
