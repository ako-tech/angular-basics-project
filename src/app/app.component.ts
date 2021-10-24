import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isCartVisible = false;

  toggleCartVisibility(): void {
    this.isCartVisible = !this.isCartVisible;
  }
}
