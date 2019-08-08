import { Injectable, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/products/model/product.model';
import { of, Observable, Subject, observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {

  changeCart = new Subject();

  constructor() {
    if (!this.parseItem('card')) {
      this.setCard([]);
    }
  }

  parseItem(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  stringifyItem(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  setCard(selectedProducts: ProductModel[]) {
    this.stringifyItem('card', selectedProducts);
    this.changeCart.next();
  }

  getCard() {
    return of(this.parseItem('card'));
  }

  addProductToCard(selectedProducts: ProductModel) {
    return this.getCard().subscribe(card => this.setCard([...card, selectedProducts]));
  }

  subscribeOnCartChanged(fn, subscriprion: Subscription) {
    subscriprion.add(this.changeCart.subscribe(_ => this.getCard().subscribe(fn)));
    this.changeCart.next();
  }
}
