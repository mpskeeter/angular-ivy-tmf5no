import { Component, Input } from '@angular/core';

@Component({
  selector: 'formly-field-wrapper',
  template: `
    <div class="pb-2 w-full flex flex-col">
      <div>
        <label class="text-gray-700 text-xs font-bold inline-block mb-1.5">{{
          label
        }}</label>
      </div>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./styles.scss'],
})
export class FormlyFieldWrapper {
  @Input() label: string = '';
}
