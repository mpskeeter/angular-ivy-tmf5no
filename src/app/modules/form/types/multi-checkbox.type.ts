import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-multicheckbox',
  template: `
    <formly-field-wrapper [label]="to.label">
      <ng-container
        *ngIf="to.options | formlySelectOptions: field | async as opts"
      >
        <div class="grid grid-cols-2 gap-x-8 items-center
        ">
          <div
            *ngFor="let opt of opts"
            class="flex flex-row items-center"
            button
          >
            <input
              type="checkbox"
              [checked]="
                formControl.value && formControl.value.includes(opt.label)
              "
              (change)="onChange(opt.label, $any($event.target).checked)"
              [ngClass]="{ 'bg-gray-200': to.disabled }"
            />
            <label class="ml-2">{{ opt.label | titlecase }}</label>
          </div>
        </div>
      </ng-container>
    </formly-field-wrapper>
  `,
  styleUrls: ['./styles.scss'],
})
export class FormlyFieldMultiCheckbox extends FieldType {
  onChange(value: any, checked: boolean) {
    this.formControl.patchValue(
      checked
        ? [...(this.formControl.value || []), value]
        : [...(this.formControl.value || [])].filter((o) => o !== value),
    );
    this.formControl.markAsTouched();
  }
}
