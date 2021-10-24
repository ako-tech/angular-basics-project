import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class IsLoggedInGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(): Observable<true | UrlTree> {
    return this.isUserLoggedIn();
  }
  canActivateChild(): Observable<true | UrlTree> {
    return this.isUserLoggedIn();
  }

  canActivate(): Observable<true | UrlTree> {
    return this.isUserLoggedIn();
  }

  private isUserLoggedIn(): Observable<true | UrlTree> {
    return this.authService.loggedIn$.pipe(
      map((loggedIn) => loggedIn || this.router.parseUrl('/login'))
    );
  }
}
