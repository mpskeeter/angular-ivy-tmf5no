import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard, PageTitleResolver } from '../../shared';
import { LayoutComponent, CourseTableComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AdminGuard],
    data: { roles: ['admin'] },
    children: [
      {
        path: 'list',
        component: CourseTableComponent,
        canActivateChild: [AdminGuard],
        data: { roles: ['admin'], title: 'Admin - Courses List' },
        resolve: { pageData: PageTitleResolver },
      },
      { path: '**', pathMatch: 'full', redirectTo: 'list' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseAdminRoutingModule {}
