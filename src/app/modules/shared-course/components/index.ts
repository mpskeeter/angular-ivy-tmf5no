import { CourseDescriptionComponent } from './course-description';
import { CourseItemComponent } from './course-item';
import { CourseItemSourceComponent } from './course-item-source';

export const ComponentsExport = [CourseDescriptionComponent, CourseItemComponent];

export const Components = [
  ...ComponentsExport,
  CourseItemSourceComponent,
];
