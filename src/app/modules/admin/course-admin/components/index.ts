import { CourseEditComponent } from './course-edit';
import { CourseTableComponent } from './course-table';
import { LayoutComponent } from './layout';

export const ComponentsExport = [];

export const Components = [
  ...ComponentsExport,
  CourseEditComponent,
  CourseTableComponent,
  LayoutComponent,
];

export * from './course-edit';
export * from './course-table';
export * from './layout';
