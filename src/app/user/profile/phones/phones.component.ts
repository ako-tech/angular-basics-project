import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhonesComponent {
  phonesForm = new FormGroup({
    phones: new FormArray([]),
  });

  get phones(): FormArray {
    return this.phonesForm.get('phones') as FormArray;
  }

  constructor() {}

  addPhoneRow(): void {
    this.phones.push(new FormControl(''));
  }

  deletePhoneAtRow(index: number): void {
    this.phones.removeAt(index);
  }
}
