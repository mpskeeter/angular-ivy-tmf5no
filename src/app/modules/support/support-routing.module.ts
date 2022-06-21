import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageTitleResolver } from '../shared';
import {
  LayoutComponent,
  CourseRequestComponent,
  MaintenanceLogComponent,
} from './components';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: { title: 'Support' },
    resolve: { pageData: PageTitleResolver },
    children: [
      {
        path: 'course-request',
        component: CourseRequestComponent,
        data: { title: 'Support - Course Request' },
        resolve: { pageData: PageTitleResolver },
      },
      {
        path: 'help',
        component: MaintenanceLogComponent,
        data: { title: 'Support - Help' },
        resolve: { pageData: PageTitleResolver },
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'course-request',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportRoutingModule {}
