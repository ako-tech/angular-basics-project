import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogService } from './catalog.service';
import { Product } from './product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  get products(): Product[] {
    const products = this.catalogService.products;

    if (this.route.snapshot.queryParamMap.get('orderBy') === 'price') {
      products.sort((a, b) => a.price - b.price);
    }

    return products;
  }
  constructor(
    private catalogService: CatalogService,
    private route: ActivatedRoute
  ) {}
}
