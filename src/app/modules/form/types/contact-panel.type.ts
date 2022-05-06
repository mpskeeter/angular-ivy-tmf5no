// panel-wrapper.component.ts
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-contact',
  template: `
    <div class="card pb-3">
      <h3 class="text-gray-700 text-xs font-bold inline-block mb-1.5">
        {{ to.label }}
      </h3>
      <div class="card-body border rounded border-slate-400 border-solid">
        <ng-container #fieldComponent></ng-container>
      </div>
    </div>
  `,
})
export class ContactWrapperComponent extends FieldWrapper {}
