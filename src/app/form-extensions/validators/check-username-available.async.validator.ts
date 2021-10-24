import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from 'src/app/user/user.service';

export function checkUsernameIsAvailable(
  userService: UserService
): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return userService
      .isUsernameAvailable(control.value)
      .pipe(
        map((isAvailable) =>
          isAvailable ? null : { checkUsernameIsAvailable: true }
        )
      );
  };
}
