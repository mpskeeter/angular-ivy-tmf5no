import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { SupportRoutingModule } from './support-routing.module';
import { Components, ComponentsExport } from './components';
import { MaintenanceLogElements } from '../shared-types';
import { AppFormlyModule } from '../form';

@NgModule({
  imports: [SharedModule, AppFormlyModule, SupportRoutingModule],
  declarations: [...Components],
  exports: [...ComponentsExport],
  providers: [
    {
      provide: 'MAINTENANCE-LOG-COLUMNS',
      useValue: () => {
        return MaintenanceLogElements;
      },
    },
  ],
})
export class SupportModule {}
