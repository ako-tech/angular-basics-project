import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartItemComponent } from './shopping-cart/shopping-cart-item.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogProductComponent } from './catalog/catalog-product.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ShoppingCartItemComponent,
    CatalogComponent,
    CatalogProductComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
