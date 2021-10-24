import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CatalogModule } from './catalog/catalog.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';
import { ContactModule } from './contact/contact.module';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailsComponent } from './catalog/product-details/product-details.component';

const routes: Routes = [
  {
    path: 'catalog',
    component: CatalogComponent,
  },
  {
    path: 'catalog/products/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavDrawerComponent],
  imports: [
    BrowserModule,
    ShoppingCartModule,
    CatalogModule,
    ContactModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
