import { Component, Input } from '@angular/core';

@Component({
  selector: 'formly-field-wrapper',
  template: `
    <div class="p-2 w-full flex flex-col">
      <div class="w-full">
        <label class="text-gray-700 text-xs font-bold inline-block mb-1.5">{{
          label
        }}</label>
      </div>
      <div class="w-full">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./styles.scss'],
})
export class FormlyFieldWrapper {
  @Input() label: string = '';
}
