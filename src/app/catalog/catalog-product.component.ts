import { Component, Input } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { mapProductToCartItem } from './helpers/map-product-to-cart-item.helper';
import { Product } from './product';

@Component({
  selector: 'app-catalog-product',
  templateUrl: './catalog-product.component.html',
  styleUrls: ['./catalog-product.component.css'],
})
export class CatalogProductComponent {
  @Input() product!: Product;
  constructor(private scService: ShoppingCartService) {}

  addToCart(): void {
    const cartItem = mapProductToCartItem(this.product);
    this.scService.addItem(cartItem);
  }
}
