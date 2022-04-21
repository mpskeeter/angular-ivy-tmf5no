import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyComponents, FormlyComponentsExport } from './components';
import { Types, FormlyFieldInput, FormlyFieldSelect } from './types';

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
        //   {
        //     name: 'checkbox',
        //     component: FormlyFieldCheckbox,
        //     wrappers: ['form-field'],
        //   },
        //   {
        //     name: 'boolean',
        //     extends: 'checkbox',
        //   },
      ],
    }),
    // FormlyBootstrapModule,
  ],
  declarations: [...FormlyComponents, ...Types],
  exports: [FormlyComponentsExport],
})
export class AppFormlyModule {}
