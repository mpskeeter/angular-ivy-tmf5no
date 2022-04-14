import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserElements } from '../../shared-types';
import { UserForm } from '../../shared';
import { TableModule } from '../../table';
import { FormModule } from '../../form';
import { ModalModule } from '../../modal';
import { UserAdminRoutingModule } from './user-admin-routing.module';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    TableModule,
    FormModule,
    UserAdminRoutingModule,
  ],
  declarations: [...Components],
  exports: [...ComponentsExport],
  providers: [
    UserForm,
    {
      provide: 'COLUMNS',
      useValue: () => {
        return UserElements;
      },
    },
  ],
})
export class UserAdminModule {}
