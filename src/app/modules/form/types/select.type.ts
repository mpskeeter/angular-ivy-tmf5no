import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'formly-field-select',
  template: `
    <div>
      <label class="text-gray-700 text-xs font-bold inline-block mb-1.5">{{
        to.label
      }}</label>
      <select
        class="text-xs bg-white text-gray-700 border border-solid border-blue-700 rounded"
        [formControl]="formControl"
        [formlyAttributes]="field"
        [class.is-invalid]="showError"
      >
        <option *ngFor="let option of to.options" [value]="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>
  `,
  styleUrls: ['./styles.scss'],
})
export class FormlyFieldSelect extends FieldType {
  formControl!: FormControl;
}
