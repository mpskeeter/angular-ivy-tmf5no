import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyComponents, FormlyComponentsExport } from './components';
import {
  Directives,
  Types,
  Wrappers,
  FormlyFieldButton,
  FormlyFieldCheckbox,
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
    FormlyMaterialModule,
    FormlyModule.forRoot({
      types: [
        {
          name: 'button',
          component: FormlyFieldButton,
        },
        {
          name: 'checkbox',
          component: FormlyFieldCheckbox,
        },
        {
          name: 'file',
          component: FormlyFieldFile,
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
export class AppFormlyTailwindModule {}
