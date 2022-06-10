import { PlaylistsSourceEditComponent } from './playlists-source-edit';
import { PlaylistsSourceTableComponent } from './playlists-source-table';
import { LayoutComponent } from './layout';

export const ComponentsExport = [];

export const Components = [
  ...ComponentsExport,
  PlaylistsSourceEditComponent,
  PlaylistsSourceTableComponent,
  LayoutComponent,
];

export * from './playlists-source-edit';
export * from './playlists-source-table';
export * from './layout';
