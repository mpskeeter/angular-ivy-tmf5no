import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared';
// import { CourseElements } from '../../shared-types';
// import { SharedModule, CourseForm } from '../../shared';
import { TableModule } from '../../table';
import { FormModule } from '../../form';
import { ReportsAdminRoutingModule } from './reports-admin-routing.module';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [CommonModule, SharedModule, TableModule, FormModule, ReportsAdminRoutingModule],
  declarations: [...Components],
  exports: [...ComponentsExport],
  // providers: [
  //   CourseForm,
  //   {
  //     provide: 'COLUMNS',
  //     useValue: () => {
  //       return CourseElements;
  //     },
  //   },
  // ],
})
export class ReportsAdminModule {}
