import { Component, Input } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-catalog-product',
  templateUrl: './catalog-product.component.html',
  styleUrls: ['./catalog-product.component.css'],
})
export class CatalogProductComponent {
  @Input() product!: Product;
  constructor() {}
}
