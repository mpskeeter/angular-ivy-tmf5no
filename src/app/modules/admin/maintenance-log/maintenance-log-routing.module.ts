import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard, PageTitleResolver } from '../../shared';
import { LayoutComponent, MaintenanceLogTableComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AdminGuard],
    data: { roles: ['admin'], title: 'Admin - Maintenance Logs' },
    children: [
      {
        path: 'list',
        component: MaintenanceLogTableComponent,
        canActivateChild: [AdminGuard],
        data: { roles: ['admin'], title: 'Admin - Maintenance Logs' },
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
export class MaintenanceLogRoutingModule {}
