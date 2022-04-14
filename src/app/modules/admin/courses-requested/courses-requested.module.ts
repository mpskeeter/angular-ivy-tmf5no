import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseRequestElements } from '../../shared-types';
import { CourseRequestForm, RequestorInfoForm } from '../../shared';
import { TableModule } from '../../table';
import { FormModule } from '../../form';
import { CoursesRequestedRoutingModule } from './courses-requested-routing.module';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    FormModule,
    CoursesRequestedRoutingModule,
  ],
  declarations: [...Components],
  exports: [...ComponentsExport],
  providers: [
    CourseRequestForm,
    RequestorInfoForm,
    {
      provide: 'COLUMNS',
      useValue: () => {
        return CourseRequestElements;
      },
    },
  ],
})
export class CoursesRequestedModule {}
