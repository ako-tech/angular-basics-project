import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
