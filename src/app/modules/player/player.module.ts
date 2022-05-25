import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { SharedCourseModule } from '../shared-course';

import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [SharedModule, SharedCourseModule],
  declarations: [...Components],
  exports: [...ComponentsExport],
})
export class PlayerModule {}
