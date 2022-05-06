import { LayoutComponent } from './layout';
import { CategoryCarouselComponent } from './category-carousel';
import { CategoryHomeComponent } from './category-home';
import { CategoryPanelComponent } from './category-panel';
import { CourseCardComponent } from './course-card';
import { CourseCategoryListComponent } from './course-category-list';
import { CourseDateComponent } from './course-date';
import { CourseDetailComponent } from './course-detail';
import { CourseDetailContentComponent } from './course-detail-content';
import { CourseDetailContentItemComponent } from './course-detail-content-item';
import { CourseDetailContentItemSourceComponent } from './course-detail-content-item-source';
import { CourseDisplayComponent } from './course-display';
import { CourseLaunchComponent } from './course-launch';
import { EnrollButtonComponent } from './enroll-button';
import { LaunchButtonComponent } from './launch-button';
import { RibbonEnrolledComponent } from './ribbon-enrolled';
import { UserInfoComponent } from './user-info';

export const ComponentsExport = [CourseDisplayComponent];

export const Components = [
  ...ComponentsExport,
  LayoutComponent,
  CategoryCarouselComponent,
  CategoryHomeComponent,
  CategoryPanelComponent,
  CourseCategoryListComponent,
  CourseCardComponent,
  CourseDateComponent,
  CourseDetailComponent,
  CourseDetailContentComponent,
  CourseDetailContentItemComponent,
  CourseDetailContentItemSourceComponent,
  CourseLaunchComponent,
  EnrollButtonComponent,
  LaunchButtonComponent,
  RibbonEnrolledComponent,
  UserInfoComponent,
];

export * from './layout';
export * from './category-home';
export * from './category-panel';
export * from './course-card';
export * from './course-category-list';
export * from './course-date';
export * from './course-detail';
export * from './course-detail-content';
export * from './course-detail-content-item';
export * from './course-display';
export * from './course-launch';
export * from './enroll-button';
export * from './launch-button';
export * from './user-info';
