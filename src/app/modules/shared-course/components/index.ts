import { CourseDescriptionComponent } from './course-description';
import { ChevronDownIconComponent } from './chevron-down-icon';
import { CourseItemComponent } from './course-item';
import { CourseItemSourceComponent } from './course-item-source';

export const ComponentsExport = [CourseDescriptionComponent, CourseItemComponent];

export const Components = [
  ...ComponentsExport,
  ChevronDownIconComponent,
  CourseItemSourceComponent,
];
