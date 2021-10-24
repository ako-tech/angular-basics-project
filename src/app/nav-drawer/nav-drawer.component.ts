import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.css'],
})
export class NavDrawerComponent {
  isUserLoggedIn$ = this.authService.loggedIn$;

  @Output() closeDrawer = new EventEmitter<void>();

  @HostListener('click') onClick(): void {
    this.closeDrawer.emit();
  }
  constructor(private authService: AuthService) {}

  logOut(): void {
    this.authService.logOut();
  }
}
