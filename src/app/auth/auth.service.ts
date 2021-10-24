import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = false;

  constructor(private router: Router) {}

  logIn(): void {
    this.loggedIn = true;
    this.redirectToHome();
  }

  logOut(): void {
    this.loggedIn = false;
    this.redirectToHome();
  }

  private redirectToHome(): void {
    this.router.navigate(['/']);
  }
}
