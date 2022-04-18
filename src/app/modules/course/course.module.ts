import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseRoutingModule } from './course-routing.module';
import { SharedModule } from '../shared';
import { PlayerModule } from '../player';
import { CarouselModule } from '../carousel';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [CommonModule, SharedModule, CourseRoutingModule, PlayerModule, CarouselModule],
  declarations: [...Components],
  exports: [...ComponentsExport],
})
export class CourseModule {}
