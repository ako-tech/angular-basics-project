import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { ShoppingCartService } from 'src/app/shopping-cart/shopping-cart.service';
import { CatalogService } from '../catalog.service';
import { mapProductToCartItem } from '../helpers/map-product-to-cart-item.helper';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  id$: Observable<number> = this.route.paramMap.pipe(
    map((paramMap) => Number(paramMap.get('id')))
  );
  product$: Observable<Product | null> = this.id$.pipe(
    switchMap((id) => this.catalogService.getProduct(id)),
    tap((product) => product === null && this.router.navigate(['catalog']))
  );

  constructor(
    private catalogService: CatalogService,
    private scService: ShoppingCartService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  addToCart(product: Product): void {
    const cartItem = mapProductToCartItem(product);
    this.scService.addItem(cartItem);
  }
}
