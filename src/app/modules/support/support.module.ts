import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { SupportRoutingModule } from './support-routing.module';
import { Components, ComponentsExport } from './components';
// import { CourseRequestElements, MaintenanceLogElements } from '../shared-types';
import { MaintenanceLogElements } from '../shared-types';
import {
  // CourseRequestForm,
  MaintenanceLogForm,
  // RequestorInfoForm,
} from '../shared';
import { FormModule, AppFormlyModule } from '../form';

@NgModule({
  imports: [SharedModule, FormModule, AppFormlyModule, SupportRoutingModule],
  declarations: [...Components],
  exports: [...ComponentsExport],
  providers: [
    // CourseRequestForm,
    // RequestorInfoForm,
    MaintenanceLogForm,
    // {
    //   provide: 'COURSE-REQUEST-COLUMNS',
    //   useValue: () => {
    //     return CourseRequestElements;
    //   },
    // },
    {
      provide: 'MAINTENANCE-LOG-COLUMNS',
      useValue: () => {
        return MaintenanceLogElements;
      },
    },
  ],
})
export class SupportModule {}
