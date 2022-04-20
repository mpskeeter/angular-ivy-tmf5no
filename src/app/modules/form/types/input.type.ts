import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-input',
  template: `
    <input
      [type]="type"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [class.is-invalid]="showError"
    />
  `,
  styleUrls: ['./styles.scss'],
})
export class FormlyFieldInput extends FieldType {
  formControl!: FormControl;
  get type(): string {
    return this.to.type || 'text';
  }
}
