import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CatalogModule } from './catalog/catalog.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';
import { ContactModule } from './contact/contact.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavDrawerComponent],
  imports: [BrowserModule, ShoppingCartModule, CatalogModule, ContactModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
