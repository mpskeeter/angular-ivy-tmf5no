import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseRequestElements } from '../../shared-types';
import { TableModule } from '../../table';
import { AppFormlyModule } from '../../form';
import { ModalModule } from '../../modal';
import { CoursesRequestedRoutingModule } from './courses-requested-routing.module';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    AppFormlyModule,
    ModalModule,
    CoursesRequestedRoutingModule,
  ],
  declarations: [...Components],
  exports: [...ComponentsExport],
  providers: [
    {
      provide: 'COLUMNS',
      useValue: () => {
        return CourseRequestElements;
      },
    },
  ],
})
export class CoursesRequestedModule {}
