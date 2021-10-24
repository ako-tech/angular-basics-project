import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  Router,
  UrlTree,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class IsLoggedInGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(): boolean | UrlTree {
    return this.isUserLoggedIn();
  }
  canActivateChild(): boolean | UrlTree {
    return this.isUserLoggedIn();
  }

  canActivate(): boolean | UrlTree {
    return this.isUserLoggedIn();
  }

  private isUserLoggedIn(): boolean | UrlTree {
    return this.authService.loggedIn || this.router.parseUrl('/login');
  }
}
