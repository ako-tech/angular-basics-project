import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { CatalogProductComponent } from './catalog-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CatalogComponent,
    CatalogProductComponent,
    ProductDetailsComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [CatalogComponent],
})
export class CatalogModule {}
