import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { mapProductToCartItem } from './helpers/map-product-to-cart-item.helper';
import { Product } from './product';

@Component({
  selector: 'app-catalog-product',
  templateUrl: './catalog-product.component.html',
  styleUrls: ['./catalog-product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogProductComponent {
  @Input() product!: Product;
  constructor(
    private scService: ShoppingCartService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  addToCart(): void {
    const cartItem = mapProductToCartItem(this.product);
    this.scService.addItem(cartItem);
  }

  navigateToProductDetails(): void {
    this.router.navigate(['products', this.product.id], {
      relativeTo: this.route,
    });
  }
}
