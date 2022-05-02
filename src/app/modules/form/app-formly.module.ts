import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyComponents, FormlyComponentsExport } from './components';
import {
  Directives,
  Types,
  Wrappers,
  FormlyFieldFile,
  FormlyFieldInput,
  FormlyFieldMultiCheckbox,
  FormlyFieldSelect,
  FormlyFieldTextArea,
  ContactWrapperComponent,
  Validations,
  Validators,
} from './types';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlySelectModule,
    FormlyModule.forRoot({
      types: [
        {
          name: 'file',
          component: FormlyFieldFile,
          wrappers: ['form-field']
        },
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
          component: FormlyFieldTextArea,
        },
        {
          name: 'multicheckbox',
          component: FormlyFieldMultiCheckbox,
        },
      ],
      wrappers: [{ name: 'contact', component: ContactWrapperComponent }],
      validators: Validators,
      validationMessages: Validations,
    }),
  ],
  declarations: [...FormlyComponents, ...Types, ...Wrappers, ...Directives],
  exports: [FormlyComponentsExport],
})
export class AppFormlyModule {}
