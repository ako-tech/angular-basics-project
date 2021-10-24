import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { checkUsernameIsAvailable } from 'src/app/form-extensions';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-profile-change-username',
  templateUrl: './change-user-name.component.html',
  styleUrls: ['./change-user-name.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeUsernameComponent {
  newUsernameControl = new FormControl('miNombreActual', {
    asyncValidators: checkUsernameIsAvailable(this.userService),
    updateOn: 'blur',
  });

  constructor(private userService: UserService) {}
}
