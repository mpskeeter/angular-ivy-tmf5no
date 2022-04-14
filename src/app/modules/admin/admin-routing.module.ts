import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components';
import { AdminGuard } from '../shared';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AdminGuard],
    data: { roles: ['admin'] },
    children: [
      {
        path: 'courses-requested',
        loadChildren: () =>
          import('./courses-requested/courses-requested.module').then(
            (m) => m.CoursesRequestedModule,
          ),
      },
      {
        path: 'maintenance-log',
        loadChildren: () =>
          import('./maintenance-log/maintenance-log.module').then(
            (m) => m.MaintenanceLogModule,
          ),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./user-admin/user-admin.module').then(
            (m) => m.UserAdminModule,
          ),
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('./reports-admin/reports-admin.module').then(
            (m) => m.ReportsAdminModule,
          ),
      },
      {
        path: 'role',
        loadChildren: () =>
          import('./role-admin/role-admin.module').then(
            (m) => m.RoleAdminModule,
          ),
      },
      {
        path: 'course',
        loadChildren: () =>
          import('./course-admin/course-admin.module').then(
            (m) => m.CourseAdminModule,
          ),
      },
      {
        path: 'playlist',
        loadChildren: () =>
          import('./playlist-admin/playlist-admin.module').then(
            (m) => m.PlaylistAdminModule,
          ),
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'user',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
