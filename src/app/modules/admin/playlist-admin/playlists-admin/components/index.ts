import { PlaylistsEditComponent } from './playlists-edit';
import { PlaylistsBuildComponent } from './playlists-build';
import { PlaylistsTableComponent } from './playlists-table';
import { LayoutComponent } from './layout';

export const ComponentsExport = [];

export const Components = [
  ...ComponentsExport,
  PlaylistsEditComponent,
  PlaylistsBuildComponent,
  PlaylistsTableComponent,
  LayoutComponent,
];

export * from './playlists-edit';
export * from './playlists-build';
export * from './playlists-table';
export * from './layout';
