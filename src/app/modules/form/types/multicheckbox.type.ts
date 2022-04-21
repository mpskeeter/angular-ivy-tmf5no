import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-multicheckbox',
  // (click)="checkboxGroup.toggleValue(value)"
  // [checked]="checkboxGroup.isSelected(value)"
  template: `
    <formly-field-wrapper [label]="to.label" class="grid grid-cols-2 gap-x-8">
      <ng-container
        *ngIf="to.options | formlySelectOptions: field | async as opts"
      >
        <div *ngFor="let opt of opts" class="flex align-center" button>
          <input type="checkbox" />
          <label class="ml-2">{{ opt.label }}</label>
        </div>
      </ng-container>
    </formly-field-wrapper>
  `,
  styleUrls: ['./styles.scss'],
})
export class FormlyFieldMulticheckbox extends FieldType {}
