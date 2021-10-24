import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isCartVisible = false;
  isMenuOpened = false;

  toggleCartVisibility(): void {
    this.isCartVisible = !this.isCartVisible;
  }

  showMenu(): void {
    this.isCartVisible = false;
    this.isMenuOpened = true;
  }

  hideMenu(): void {
    this.isMenuOpened = false;
  }
}
