import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayListSourceElements } from '../../../shared-types';
import { SharedModule, PlayListSourceForm } from '../../../shared';
import { TableModule } from '../../../table';
import { FormModule } from '../../../form';
import { ModalModule } from '../../../modal';
import { PlaylistsSourceAdminRoutingModule } from './playlists-source-admin-routing.module';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TableModule,
    FormModule,
    ModalModule,
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
