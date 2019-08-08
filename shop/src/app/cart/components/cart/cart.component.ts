import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocalStorageService } from 'src/app/core/service/localStorage.service';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  cart;
  private subscriprion: Subscription = new Subscription();

  constructor(
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.localStorageService.subscribeOnCartChanged(cart => this.cart = cart, this.subscriprion);
  }

  ngOnDestroy() {
    this.subscriprion.unsubscribe();
  }
}
