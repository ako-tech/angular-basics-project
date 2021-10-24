import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

export const doesntContainNTilde: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  return String(control.value).toLowerCase().includes('ñ')
    ? { doesntContainNTilde: true }
    : null;
};

@Directive({
  selector: '[appDoesntContainNTilde]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DoesntContainNTildeDirective,
      multi: true,
    },
  ],
})
export class DoesntContainNTildeDirective implements Validator {
  validate = doesntContainNTilde;
}
