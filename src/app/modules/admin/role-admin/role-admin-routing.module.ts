import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard, PageTitleResolver } from '../../shared';
import {
  LayoutComponent,
  // RoleAdminComponent,
  RoleTableComponent,
} from './components';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AdminGuard],
    data: { roles: ['admin'], title: 'Admin - Roles' },
    children: [
      {
        path: 'list',
        component: RoleTableComponent,
        canActivateChild: [AdminGuard],
        data: { roles: ['admin'], title: 'Admin - Role List' },
        resolve: { pageData: PageTitleResolver },
      },
      // {
      //   path: 'add',
      //   component: RoleAdminComponent,
      //   canActivateChild: [AdminGuard],
      //   data: { roles: ['admin'], title: 'Admin - Roles Add' },
      //   resolve: { pageData: PageTitleResolver },
      // },
      // {
      //   path: 'edit/:id',
      //   component: RoleAdminComponent,
      //   canActivateChild: [AdminGuard],
      //   data: { roles: ['admin'], title: 'Admin - Role Edit' },
      //   resolve: { pageData: PageTitleResolver },
      // },
      { path: '**', pathMatch: 'full', redirectTo: 'list' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoleAdminRoutingModule {}
