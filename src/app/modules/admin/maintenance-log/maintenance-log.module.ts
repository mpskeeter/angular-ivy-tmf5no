import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceLogAdminElements } from '../../shared-types';
import { TableModule } from '../../table';
import { AppFormlyModule } from '../../form';
import { ModalModule } from '../../modal';
import { MaintenanceLogRoutingModule } from './maintenance-log-routing.module';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    AppFormlyModule,
    ModalModule,
    MaintenanceLogRoutingModule,
  ],
  declarations: [...Components],
  exports: [...ComponentsExport],
  providers: [
    {
      provide: 'COLUMNS',
      useValue: () => {
        return MaintenanceLogAdminElements;
      },
    },
  ],
})
export class MaintenanceLogModule {}
