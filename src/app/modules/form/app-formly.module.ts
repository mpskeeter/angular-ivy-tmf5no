import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyComponents, FormlyComponentsExport } from './components';
import {
  Types,
  Wrappers,
  FormlyFieldInput,
  FormlyFieldMultiCheckbox,
  FormlyFieldSelect,
  FormlyFieldTextarea,
  ContactWrapperComponent,
} from './types';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlySelectModule,
    FormlyModule.forRoot({
      types: [
        {
          name: 'input',
          component: FormlyFieldInput,
        },
        {
          name: 'select',
          component: FormlyFieldSelect,
        },
        {
          name: 'textarea',
          component: FormlyFieldTextarea,
        },
        {
          name: 'multicheckbox',
          component: FormlyFieldMultiCheckbox,
        },
      ],
      wrappers: [{ name: 'contact', component: ContactWrapperComponent }],
    }),
  ],
  declarations: [...FormlyComponents, ...Types, ...Wrappers],
  exports: [FormlyComponentsExport],
})
export class AppFormlyModule {}
