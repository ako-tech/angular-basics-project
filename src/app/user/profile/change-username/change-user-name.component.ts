import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-change-username',
  templateUrl: './change-user-name.component.html',
  styleUrls: ['./change-user-name.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeUsernameComponent {
  newUsernameControl = new FormControl('miNombreActual');

  constructor() {}
}
