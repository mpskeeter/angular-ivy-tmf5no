import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'formly-field-checkbox',
  template: `
    <formly-field-wrapper [label]="to.label">
      <input
        type="checkbox"
        [checked]="
          formControl.value && formControl.value.includes(to.label)
        "
        (change)="onChange(to.label, $any($event.target).checked)"
        [ngClass]="{ 'bg-gray-200': to.disabled }"
      />
    </formly-field-wrapper>
  `,
  styleUrls: ['./styles.scss'],
})
export class FormlyFieldCheckbox extends FieldType {
  formControl!: FormControl;
  onChange(value: any, checked: boolean) {
    this.formControl.patchValue(
      checked
        ? [...(this.formControl.value || []), value]
        : [...(this.formControl.value || [])].filter((o) => o !== value)
    );
    this.formControl.markAsTouched();
  }
}
