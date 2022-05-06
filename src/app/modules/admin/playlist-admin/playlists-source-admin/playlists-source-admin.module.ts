import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayListSourceElements } from '../../../shared-types';
import { SharedModule } from '../../../shared';
import { TableModule } from '../../../table';
import { AppFormlyModule } from '../../../form';
import { ModalModule } from '../../../modal';
import { PlaylistsSourceAdminRoutingModule } from './playlists-source-admin-routing.module';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TableModule,
    AppFormlyModule,
    ModalModule,
    PlaylistsSourceAdminRoutingModule,
  ],
  declarations: [...Components],
  exports: [...ComponentsExport],
  providers: [
    {
      provide: 'COLUMNS',
      useValue: () => {
        return PlayListSourceElements;
      },
    },
  ],
})
export class PlaylistsSourceAdminModule {}
