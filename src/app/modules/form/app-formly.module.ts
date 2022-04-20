import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyComponents, FormlyComponentsExport } from './components';
// import { Types, FormlyFieldCheckbox, FormlyFieldInput } from './types';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule
      .forRoot
      // {
      // types: [
      //   {
      //     name: 'input',
      //     component: FormlyFieldInput,
      //   },
      //   {
      //     name: 'checkbox',
      //     component: FormlyFieldCheckbox,
      //     wrappers: ['form-field'],
      //   },
      //   {
      //     name: 'boolean',
      //     extends: 'checkbox',
      //   },
      // ],
      // }
      (),
    FormlyBootstrapModule,
  ],
  // declarations: [...Types, ...FormlyComponents],
  declarations: [...FormlyComponents],
  exports: [...FormlyComponentsExport],
})
export class AppFormlyModule {}
