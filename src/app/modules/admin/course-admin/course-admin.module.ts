import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseElements } from '../../shared-types';
import { CourseForm } from '../../shared';
import { TableModule } from '../../table';
import { FormModule } from '../../form';
import { ModalModule } from '../../modal';
import { CourseAdminRoutingModule } from './course-admin-routing.module';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    FormModule,
    ModalModule,
    CourseAdminRoutingModule,
  ],
  declarations: [...Components],
  exports: [...ComponentsExport],
  providers: [
    CourseForm,
    {
      provide: 'COLUMNS',
      useValue: () => {
        return CourseElements;
      },
    },
  ],
})
export class CourseAdminModule {}
