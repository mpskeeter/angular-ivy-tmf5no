import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared';

import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [...Components],
  exports: [...ComponentsExport],
})
export class SharedCourseModule {}
