import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductComponent, ProductsComponent],
  imports: [CommonModule, ProductsRoutingModule, SharedModule, RouterModule],
  exports: [ProductsRoutingModule],
})
export class ProductsModule {}
