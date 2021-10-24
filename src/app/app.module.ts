import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CatalogModule } from './catalog/catalog.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavDrawerComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    ShoppingCartModule,
    CatalogModule,
    AuthModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
