import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  isUsernameAvailable(username: string): Observable<boolean> {
    const result = username === 'admin' ? false : true;
    return of(result).pipe(delay(1000));
  }
}
