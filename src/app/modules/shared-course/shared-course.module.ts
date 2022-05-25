import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [...Components],
  exports: [...ComponentsExport],
})
export class SharedCourseModule {}
