import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayListItemElements } from '../../../shared-types';
import { SharedModule, PlayListItemForm } from '../../../shared';
import { TableModule } from '../../../table';
import { FormModule } from '../../../form';
import { ModalModule } from '../../../modal';
import { PlaylistsItemAdminRoutingModule } from './playlists-item-admin-routing.module';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TableModule,
    FormModule,
    ModalModule,
    PlaylistsItemAdminRoutingModule,
  ],
  declarations: [...Components],
  exports: [...ComponentsExport],
  providers: [
    PlayListItemForm,
    {
      provide: 'COLUMNS',
      useValue: () => {
        return PlayListItemElements;
      },
    },
  ],
})
export class PlaylistsItemAdminModule {}
