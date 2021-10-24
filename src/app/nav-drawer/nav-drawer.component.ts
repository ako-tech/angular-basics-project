import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.css'],
})
export class NavDrawerComponent implements OnInit {
  get isUserLoggedIn(): boolean {
    return this.authService.loggedIn;
  }

  @Output() closeDrawer = new EventEmitter<void>();

  @HostListener('click') onClick(): void {
    this.closeDrawer.emit();
  }
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  logOut(): void {
    this.authService.logOut();
  }
}
