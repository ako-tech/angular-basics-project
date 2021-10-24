import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartItem } from './cart-item';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private items = new BehaviorSubject<CartItem[]>([]);
  items$ = this.items.asObservable();

  itemsCount$: Observable<number> = this.items$.pipe(
    map((items) => items.length)
  );

  total$: Observable<number> = this.items$.pipe(
    map((items) => items.reduce((acc, { price }) => (acc += price), 0))
  );

  addItem(item: CartItem): void {
    this.items.next([...this.items.value, item]);
  }

  deleteItem(itemToDelete: CartItem): void {
    this.items.next(this.items.value.filter((item) => item !== itemToDelete));
  }
}
