import { LayoutComponent } from './layout';
import { CategoryCarouselComponent } from './category-carousel';
import { CategoryHomeComponent } from './category-home';
import { CategoryPanelComponent } from './category-panel';
import { CoursesAvailableComponent } from './courses-available';
import { CoursesDisplayComponent } from './courses-display';
import { CourseCardComponent } from './course-card';
import { CourseCategoryListComponent } from './course-category-list';
import { CourseDetailComponent } from './course-detail';
import { CourseDisplayComponent } from './course-display';
import { CourseLaunchComponent } from './course-launch';
// import { CourseListComponent } from './course-list';
import { CourseListMetaComponent } from './course-list-meta';
import { EnrolledComponent } from './enrolled';
import { EnrollButtonComponent } from './enroll-button';
import { LaunchButtonComponent } from './launch-button';
import { UserInfoComponent } from './user-info';

export const ComponentsExport = [
  CourseLaunchComponent,
  // CourseListComponent,
  CourseDisplayComponent,
];

export const Components = [
  ...ComponentsExport,
  LayoutComponent,
  CategoryCarouselComponent,
  CategoryHomeComponent,
  CategoryPanelComponent,
  CoursesAvailableComponent,
  CoursesDisplayComponent,
  CourseCategoryListComponent,
  CourseCardComponent,
  CourseDetailComponent,
  CourseListMetaComponent,
  EnrolledComponent,
  EnrollButtonComponent,
  LaunchButtonComponent,
  UserInfoComponent,
];

export * from './layout';
export * from './category-home';
export * from './category-panel';
export * from './courses-available';
export * from './course-card';
export * from './course-category-list';
export * from './course-detail';
export * from './course-display';
export * from './course-launch';
// export * from './course-list';
export * from './enroll-button';
export * from './launch-button';
export * from './user-info';
