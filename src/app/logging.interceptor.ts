import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const startedAt = Date.now();

    return next.handle(request).pipe(
      finalize(() => {
        const timeElapsed = Date.now() - startedAt;
        console.log({
          url: request.urlWithParams,
          timeElapsed,
        });
      })
    );
  }
}
