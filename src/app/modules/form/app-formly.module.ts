import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core'; 
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyFormComponent } from './components';
import { Types, FormlyFieldCheckbox, FormlyFieldInput } from './types';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        { name: 'input', component: FormlyFieldInput },
        { name: 'checkbox', component: FormlyFieldCheckbox },
      ],
    }),
    FormlyBootstrapModule,
  ],
  declarations: [...Types],
  exports: [FormlyModule, FormlyFormComponent],
})
export class AppFormlyModule {}
