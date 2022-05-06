import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'formly-field-select',
  template: `
    <formly-field-wrapper [label]="to.label">
      <select
        class="w-full text-xs bg-white text-gray-700 border border-solid border-gray-400"
        [ngClass]="{ 'bg-gray-200': to.disabled }"
        [formControl]="formControl"
        [formlyAttributes]="field"
        [class.is-invalid]="showError"
      >
        <ng-container
          *ngIf="to.options | formlySelectOptions: field | async as opts"
        >
          <option *ngFor="let opt of opts" [ngValue]="opt.value">
            {{ opt.label }}
          </option>
        </ng-container>
      </select>
    </formly-field-wrapper>
  `,
  styleUrls: ['./styles.scss'],
})
export class FormlyFieldSelect extends FieldType {
  formControl!: FormControl;
}
