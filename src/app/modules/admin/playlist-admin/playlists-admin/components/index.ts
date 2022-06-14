import { LayoutComponent } from './layout';
import { PlaylistsEditComponent } from './playlists-edit';
import { PlaylistsBuildComponent } from './playlists-build';
import { PlaylistsBuildSourcesComponent } from './playlists-build-sources';
import { PlaylistsTableComponent } from './playlists-table';
import { SaveCancelButtonsComponent } from './save-cancel-buttons';

export const ComponentsExport = [];

export const Components = [
  ...ComponentsExport,
  LayoutComponent,
  PlaylistsEditComponent,
  PlaylistsBuildComponent,
  PlaylistsBuildSourcesComponent,
  PlaylistsTableComponent,
  SaveCancelButtonsComponent,
];

export * from './layout';
export * from './playlists-edit';
export * from './playlists-build';
export * from './playlists-build-sources';
export * from './playlists-table';
export * from './save-cancel-buttons';
