import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageTitleResolver } from '../shared';
import {
  LayoutComponent,
  CategoryHomeComponent,
  CourseCategoryListComponent,
  // CourseDetailComponent,
  CourseLaunchComponent,
  // CourseListComponent,
} from './components';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: CategoryHomeComponent,
        data: { title: 'All Courses' },
        resolve: { pageData: PageTitleResolver },
      },
      {
        path: 'category/:id',
        component: CourseCategoryListComponent,
        resolve: { pageData: PageTitleResolver },
      },
      {
        path: 'launch/:id',
        component: CourseLaunchComponent,
        data: { skipHeader: true },
        resolve: { pageData: PageTitleResolver },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
