import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordsMustBeEqual } from 'src/app/form-extensions';

@Component({
  selector: 'app-profile-change-password',
  templateUrl: './change-password.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangePasswordComponent {
  passwordChangeForm = new FormGroup(
    {
      newPassword: new FormControl('', Validators.required),
      passwordConfirm: new FormControl('', Validators.required),
    },
    passwordsMustBeEqual
  );

  constructor() {}
}
