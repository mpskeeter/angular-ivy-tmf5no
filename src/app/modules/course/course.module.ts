import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseRoutingModule } from './course-routing.module';
import { SharedModule } from '../shared';
import { SharedCourseModule } from '../shared-course';
import { PlayerModule } from '../player';
import { CarouselModule } from '../carousel';
import { BlogModule } from '../blog';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [CommonModule, SharedModule, SharedCourseModule, CourseRoutingModule, PlayerModule, CarouselModule, BlogModule],
  declarations: [...Components],
  exports: [...ComponentsExport],
})
export class CourseModule {}
