import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'formly-field-input',
  template: `
    <formly-field-wrapper>
      <label class="text-gray-700 text-xs font-bold inline-block mb-1.5">{{
        to.label
      }}</label>
      <input
        [type]="type"
        class="h-7 text-xs bg-white text-gray-700 border border-solid border-blue-700 rounded"
        [formControl]="formControl"
        [formlyAttributes]="field"
        [class.is-invalid]="showError"
      />
    </formly-field-wrapper>
  `,
  styleUrls: ['./styles.scss'],
})
export class FormlyFieldInput extends FieldType {
  formControl!: FormControl;
  get type(): string {
    return this.to.type || 'text';
  }
}
