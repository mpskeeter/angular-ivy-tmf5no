import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-multicheckbox',
  template: `
    <formly-field-wrapper [label]="to.label" class="grid grid-cols-2 gap-x-8">
      <ng-container
        *ngIf="to.options | formlySelectOptions: field | async as opts"
      >
        <div
          *ngFor="let opt of opts"
          class="flex align-center"
          // (click)="checkboxGroup.toggleValue(value)"
          button
        >
          <input type="checkbox" [checked]="checkboxGroup.isSelected(value)" />
          <label class="ml-2">{{ opt.label }}</label>
        </div>
      </ng-container>
    </formly-field-wrapper>
  `,
  styleUrls: ['./styles.scss'],
})
export class FormlyFieldMulticheckbox extends FieldType {}
