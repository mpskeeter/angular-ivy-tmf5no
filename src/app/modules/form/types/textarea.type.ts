import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'formly-field-textarea',
  template: `
    <formly-field-wrapper [label]="to.label">
      <textarea
        class="w-full text-xs bg-white text-gray-700 border border-solid border-gray-400"
        [ngClass]="{ 'bg-gray-200': to.disabled }"
        [formControl]="formControl"
        [cols]="to.cols || 80"
        [rows]="to.rows || 5"
        [class.is-invalid]="showError"
        [formlyAttributes]="field"
      >
      </textarea>
    </formly-field-wrapper>
  `,
})
export class FormlyFieldTextArea extends FieldType {
  formControl!: FormControl;
}
