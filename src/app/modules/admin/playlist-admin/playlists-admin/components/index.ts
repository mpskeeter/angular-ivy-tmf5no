import { PlaylistsAdminComponent } from './playlists-admin';
import { PlaylistsBuildComponent } from './playlists-build';
import { PlaylistsTableComponent } from './playlists-table';
import { LayoutComponent } from './layout';

export const ComponentsExport = [];

export const Components = [
  ...ComponentsExport,
  PlaylistsAdminComponent,
  PlaylistsBuildComponent,
  PlaylistsTableComponent,
  LayoutComponent,
];

export * from './playlists-admin';
export * from './playlists-build';
export * from './playlists-table';
export * from './layout';
