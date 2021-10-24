import { Component, Host, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FormErrorContainerComponent } from '../form-error-container/form-error-container.component';
import { errorsDictionary } from './errors.dictionary';

@Component({
  selector: 'app-form-error-msg',
  template: `<p *ngIf="control?.hasError(errorCode)">
    {{ errorMsg }}
  </p> `,
})
export class FormErrorMsgComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('forErrorCode') errorCode!: string;
  @Input() customMsg: string | null = null;
  control!: AbstractControl | null;

  get errorMsg(): string {
    if (this.customMsg) {
      return this.customMsg;
    }

    if (errorsDictionary[this.errorCode] !== undefined) {
      return errorsDictionary[this.errorCode];
    }

    return `Hay un error en el campo. (code: ${this.errorCode})`;
  }

  constructor(@Host() private errorContainer: FormErrorContainerComponent) {}

  ngOnInit(): void {
    this.control = this.errorContainer.control;
  }
}
