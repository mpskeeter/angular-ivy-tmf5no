import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleElements } from '../../shared-types';
import { RoleForm } from '../../shared';
import { TableModule } from '../../table';
import { FormModule } from '../../form';
import { ModalModule } from '../../modal';
import { RoleAdminRoutingModule } from './role-admin-routing.module';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    FormModule,
    ModalModule,
    RoleAdminRoutingModule,
  ],
  declarations: [...Components],
  exports: [...ComponentsExport],
  providers: [
    RoleForm,
    {
      provide: 'COLUMNS',
      useValue: () => {
        return RoleElements;
      },
    },
  ],
})
export class RoleAdminModule {}
