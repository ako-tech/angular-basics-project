import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  private products = new BehaviorSubject<Product[]>([
    {
      id: 1,
      imageUrl: 'headphones.jpg',
      name: 'Auriculares',
      price: 50,
    },
    {
      id: 2,
      imageUrl: 'keyboard.jpg',
      name: 'Teclado',
      price: 14.5,
    },
    {
      id: 3,
      imageUrl: 'monitor.jpg',
      name: 'Monitor',
      price: 199.99,
    },
  ]);
  products$ = this.products.asObservable();

  constructor() {}

  getProduct(requestId: number): Observable<Product | null> {
    return this.products$.pipe(
      map(
        (products) =>
          products.find((product) => product.id === requestId) || null
      )
    );
  }
}
