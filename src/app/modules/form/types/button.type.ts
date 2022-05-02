import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-button',
  template: `
    <button
      class="{{to.class}}"
      (click)="to.onClick()"
    >
      {{to.text}}
    </button>
  `,
  styleUrls: ['./styles.scss'],
})
export class FormlyFieldButton extends FieldType {
  formControl!: FormControl;  
}