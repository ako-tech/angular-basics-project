import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const authToken = this.authService.authToken;

    if (authToken === null || this.isThirdPartyRequest(request.url)) {
      return next.handle(request);
    }

    const requestWithHeader = request.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    return next.handle(requestWithHeader);
  }

  private isThirdPartyRequest(url: string): boolean {
    return url.startsWith(environment.API_BASE_URL) === false;
  }
}
