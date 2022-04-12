import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserElements } from '../../shared-types';
import { SharedModule, UserForm } from '../../shared';
import { TableModule } from '../../table';
import { FormModule } from '../../form';
import { UserAdminRoutingModule } from './user-admin-routing.module';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
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
