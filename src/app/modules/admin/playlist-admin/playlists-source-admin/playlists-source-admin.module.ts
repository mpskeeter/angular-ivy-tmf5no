import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayListSourceElements } from '../../../shared-types';
import { SharedModulePlayListSourceForm } from '../../../shared';
import { TableModule } from '../../../table';
import { FormModule } from '../../../form';
import { PlaylistsSourceAdminRoutingModule } from './playlists-source-admin-routing.module';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    FormModule,
    PlaylistsSourceAdminRoutingModule,
  ],
  declarations: [...Components],
  exports: [...ComponentsExport],
  providers: [
    PlayListSourceForm,
    {
      provide: 'COLUMNS',
      useValue: () => {
        return PlayListSourceElements;
      },
    },
  ],
})
export class PlaylistsSourceAdminModule {}
