import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components';
import { AdminGuard } from '../shared';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    // canActivateChild: [AdminGuard],
    canActivate: [AdminGuard],
    data: { roles: ['admin'] },
    children: [
      {
        path: 'courses-requested',
        // canActivateChild: [AdminGuard],
        // data: { roles: ['admin'], title: ' Admin - Courses Requested' },
        // data: { title: ' Admin - Courses Requested' },
        loadChildren: () =>
          import('./courses-requested/courses-requested.module').then(
            (m) => m.CoursesRequestedModule
          ),
      },
      {
        path: 'maintenance-log',
        // canActivate: [AdminGuard],
        // data: { roles: ['admin'], title: ' Admin - Maintenance Log' },
        // data: { title: ' Admin - Maintenance Log' },
        loadChildren: () =>
          import('./maintenance-log/maintenance-log.module').then(
            (m) => m.MaintenanceLogModule
          ),
      },
      {
        path: 'user',
        // canActivate: [AdminGuard],
        // data: { roles: ['admin'] },
        loadChildren: () =>
          import('./user-admin/user-admin.module').then(
            (m) => m.UserAdminModule
          ),
      },
      {
        path: 'reports',
        // canActivate: [AdminGuard],
        // data: { roles: ['admin'], title: ' Admin - Maintenance Log' },
        // data: { title: ' Admin - Maintenance Log' },
        loadChildren: () =>
          import('./reports-admin/reports-admin.module').then(
            (m) => m.ReportsAdminModule
          ),
      },
      {
        path: 'role',
        // canActivate: [AdminGuard],
        // data: { roles: ['admin'] },
        loadChildren: () =>
          import('./role-admin/role-admin.module').then(
            (m) => m.RoleAdminModule
          ),
      },
      {
        path: 'course',
        // canActivateChild: [AdminGuard],
        // data: { roles: ['admin'] },
        loadChildren: () =>
          import('./course-admin/course-admin.module').then(
            (m) => m.CourseAdminModule
          ),
      },
      {
        path: 'playlist',
        // canActivate: [AdminGuard],
        // data: { roles: ['admin'] },
        loadChildren: () =>
          import('./playlist-admin/playlist-admin.module').then(
            (m) => m.PlaylistAdminModule
          ),
      },
      {
        path: '**',
        // canActivate: [AdminGuard],
        // data: { roles: ['admin'] },
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
