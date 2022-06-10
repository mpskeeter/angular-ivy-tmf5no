import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard, PageTitleResolver } from '../../../shared';
import {
  LayoutComponent,
  PlaylistsBuildComponent,
  PlaylistsTableComponent,
} from './components';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AdminGuard],
    data: { roles: ['admin'], title: 'Admin - Playlists' },
    children: [
      {
        path: 'list',
        component: PlaylistsTableComponent,
        canActivateChild: [AdminGuard],
        data: { roles: ['admin'], title: 'Admin - Playlists' },
        resolve: { pageData: PageTitleResolver },
      },
      {
        path: 'buildItems/:id',
        component: PlaylistsBuildComponent,
        canActivateChild: [AdminGuard],
        data: { roles: ['admin'], title: 'Admin - Playlist Item Builder' },
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
export class PlaylistsAdminRoutingModule {}
