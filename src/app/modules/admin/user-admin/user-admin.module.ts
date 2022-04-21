import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserElements } from '../../shared-types';
import { TableModule } from '../../table';
import { AppFormlyModule } from '../../form';
import { ModalModule } from '../../modal';
import { UserAdminRoutingModule } from './user-admin-routing.module';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    TableModule,
    AppFormlyModule,
    // FormModule,
    UserAdminRoutingModule,
  ],
  declarations: [...Components],
  exports: [...ComponentsExport],
  providers: [
    {
      provide: 'COLUMNS',
      useValue: () => {
        return UserElements;
      },
    },
  ],
})
export class UserAdminModule {}
