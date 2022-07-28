import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
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

const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline'
};

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

    // FormlyModule.forRoot({
    //   wrappers: [{ name: 'contact', component: ContactWrapperComponent }],
    //   validators: Validators,
    //   validationMessages: Validations,
    // }),

  ],
  declarations: [...FormlyComponents, ...Types, ...Wrappers, ...Directives],
  exports: [FormlyComponentsExport],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: appearance
    }
  ],
})
export class AppFormlyModule {}
