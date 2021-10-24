import { Component, OnInit } from '@angular/core';
import { CartItem } from './cart-item';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  cartItems$ = this.shoppingcartService.items$;
  total$ = this.shoppingcartService.total$;

  constructor(private shoppingcartService: ShoppingCartService) {}

  ngOnInit(): void {}

  deleteItem(itemToDelete: CartItem): void {
    this.shoppingcartService.deleteItem(itemToDelete);
  }
}
