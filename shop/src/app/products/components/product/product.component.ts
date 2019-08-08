import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../../model/product.model';
import { LocalStorageService } from 'src/app/core/service/localStorage.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
  }

  onBuy(event: any) {
  }

  onPutInCart() {
    this.localStorageService.addProductToCard(this.product);
  }

}
