import { LayoutComponent } from './layout';
import { CategoryCarouselComponent } from './category-carousel';
import { CategoryHeaderComponent } from './category-header';
import { CategoryHomeComponent } from './category-home';
import { CategoryPanelComponent } from './category-panel';
import { CourseCardComponent } from './course-card';
import { CourseCarouselComponent } from './course-carousel';
import { CourseCategoryListComponent } from './course-category-list';
import { CourseDateComponent } from './course-date';
import { CourseDetailComponent } from './course-detail';
import { CourseDetailContentComponent } from './course-detail-content';
import { CourseLaunchComponent } from './course-launch';
import { EnrollButtonComponent } from './enroll-button';
import { LaunchButtonComponent } from './launch-button';
import { RibbonEnrolledComponent } from './ribbon-enrolled';
import { UserInfoComponent } from './user-info';

export const ComponentsExport = [];

export const Components = [
  ...ComponentsExport,
  LayoutComponent,
  CategoryCarouselComponent,
  CategoryHeaderComponent,
  CategoryHomeComponent,
  CategoryPanelComponent,
  CourseCarouselComponent,
  CourseCategoryListComponent,
  CourseCardComponent,
  CourseDateComponent,
  CourseDetailComponent,
  CourseDetailContentComponent,
  CourseLaunchComponent,
  EnrollButtonComponent,
  LaunchButtonComponent,
  RibbonEnrolledComponent,
  UserInfoComponent,
];

export * from './layout';
export * from './category-header';
export * from './category-home';
export * from './category-panel';
export * from './course-card';
export * from './course-category-list';
export * from './course-date';
export * from './course-detail';
export * from './course-detail-content';
export * from './course-launch';
export * from './enroll-button';
export * from './launch-button';
export * from './user-info';
