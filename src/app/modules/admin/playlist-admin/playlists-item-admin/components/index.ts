import { PlaylistsItemEditComponent } from './playlists-item-edit';
import { PlaylistsItemTableComponent } from './playlists-item-table';
import { LayoutComponent } from './layout';

export const ComponentsExport = [];

export const Components = [
  ...ComponentsExport,
  PlaylistsItemEditComponent,
  PlaylistsItemTableComponent,
  LayoutComponent,
];

export * from './playlists-item-edit';
export * from './playlists-item-table';
export * from './layout';
