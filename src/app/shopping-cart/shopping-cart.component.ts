import { Component, OnInit } from '@angular/core';
import { CartItem } from './cart-item';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  cartItems: CartItem[] = this.shoppingcartService.items;

  get total(): number {
    return this.shoppingcartService.total;
  }

  constructor(private shoppingcartService: ShoppingCartService) {}

  ngOnInit(): void {}

  deleteItem(itemToDelete: CartItem): void {
    this.shoppingcartService.deleteItem(itemToDelete);
  }
}
