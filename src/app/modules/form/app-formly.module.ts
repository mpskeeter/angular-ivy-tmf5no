import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyComponents, FormlyComponentsExport } from './components';
// import { Types, FormlyFieldCheckbox, FormlyFieldInput } from './types';

const ModulesExport = [FormsModule, ReactiveFormsModule];

@NgModule({
  imports: [
    CommonModule,
    ...ModulesExport,
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
  declarations: [...Types],
  exports: [FormlyFormComponent],
})
export class AppFormlyModule {}
