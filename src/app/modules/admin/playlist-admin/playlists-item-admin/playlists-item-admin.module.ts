import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemElements } from '../../../shared-types';
import { SharedModule } from '../../../shared';
import { TableModule } from '../../../table';
import { AppFormlyModule } from '../../../form';
import { ModalModule } from '../../../modal';
import { PlaylistsItemAdminRoutingModule } from './playlists-item-admin-routing.module';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TableModule,
    AppFormlyModule,
    ModalModule,
    PlaylistsItemAdminRoutingModule,
  ],
  declarations: [...Components],
  exports: [...ComponentsExport],
  providers: [
    {
      provide: 'COLUMNS',
      useValue: () => {
        return ItemElements;
      },
    },
  ],
})
export class PlaylistsItemAdminModule {}
