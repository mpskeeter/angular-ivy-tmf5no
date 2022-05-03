import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleElements } from '../../shared-types';
import { SharedModule } from '../../shared';
import { TableModule } from '../../table';
import { AppFormlyModule } from '../../form';
import { ModalModule } from '../../modal';
import { RoleAdminRoutingModule } from './role-admin-routing.module';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TableModule,
    AppFormlyModule,
    ModalModule,
    RoleAdminRoutingModule,
  ],
  declarations: [...Components],
  exports: [...ComponentsExport],
  providers: [
    {
      provide: 'COLUMNS',
      useValue: () => {
        return RoleElements;
      },
    },
  ],
})
export class RoleAdminModule {}
