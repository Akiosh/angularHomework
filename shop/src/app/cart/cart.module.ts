import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { CartComponent } from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CartComponent
  ],
  exports: [
    CartComponent
  ],
  providers: [],
})
export class CartModule { }
