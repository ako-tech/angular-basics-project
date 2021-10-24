import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  readonly products: Product[] = [
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
  ];
  constructor() {}

  getProduct(requestId: number): Product | null {
    return this.products.find((product) => product.id === requestId) || null;
  }
}
