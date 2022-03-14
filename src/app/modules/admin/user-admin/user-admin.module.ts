import { NgModule } from '@angular/core';
import { SharedModule, UserElements, UserForm } from '../../shared';
import { FormModule } from '../../form';
import { UserAdminRoutingModule } from './user-admin-routing.module';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [SharedModule, FormModule, UserAdminRoutingModule],
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