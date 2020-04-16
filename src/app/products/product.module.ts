import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent],
  imports: [
    // Other Modules now already accessible from the imported SharedModule
    SharedModule,
    ProductRoutingModule,
  ],
})
export class ProductModule {}
