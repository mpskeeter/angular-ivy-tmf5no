import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'formly-field-input',
  template: `
    <formly-field-wrapper [label]="to.label">
      <input
        [type]="type"
        class="w-full text-xs bg-white text-gray-700 border border-solid border-gray-400"
        [ngClass]="{ 'bg-gray-200': to.disabled }"
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
