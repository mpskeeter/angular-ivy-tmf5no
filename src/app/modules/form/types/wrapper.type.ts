import { Component } from '@angular/core';

@Component({
  selector: 'formly-field-wrapper',
  template: `
    <div class="h-10">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./styles.scss'],
})
export class FormlyFieldWrapper {}
