import { Component } from '@angular/core';
import { CatalogService } from './catalog.service';
import { Product } from './product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  get products(): Product[] {
    return this.catalogService.products;
  }
  constructor(private catalogService: CatalogService) {}
}
