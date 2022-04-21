import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseElements } from '../../shared-types';
import { TableModule } from '../../table';
import { AppFormlyModule } from '../../form';
import { ModalModule } from '../../modal';
import { CourseAdminRoutingModule } from './course-admin-routing.module';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    AppFormlyModule,
    ModalModule,
    CourseAdminRoutingModule,
  ],
  declarations: [...Components],
  exports: [...ComponentsExport],
  providers: [
    {
      provide: 'COLUMNS',
      useValue: () => {
        return CourseElements;
      },
    },
  ],
})
export class CourseAdminModule {}
