import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  readonly products: Product[] = [
    {
      imageUrl: 'headphones.jpg',
      name: 'Auriculares',
      price: 50,
    },
    {
      imageUrl: 'keyboard.jpg',
      name: 'Teclado',
      price: 14.5,
    },
    {
      imageUrl: 'monitor.jpg',
      name: 'Monitor',
      price: 199.99,
    },
  ];
  constructor() {}
}
