import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-file',
  template: `
    <formly-field-wrapper [label]="to.label">
      <input
        type="file"
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
export class FormlyFieldFile extends FieldType {
  formControl!: FormControl;  
}