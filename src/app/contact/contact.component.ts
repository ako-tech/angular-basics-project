import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  model = {
    name: 'Un Nombre',
    email: 'un@email.es',
    message: 'Un Mensaje',
  };
  constructor() {}

  onSubmit(formValue: any): void {
    //procesar envio
  }
}
