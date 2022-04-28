import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PlayListElements } from '../../../shared-types';
import { SharedModule } from '../../../shared';
import { TableModule } from '../../../table';
import { AppFormlyModule } from '../../../form';
import { ModalModule } from '../../../modal';
import { PlaylistsAdminRoutingModule } from './playlists-admin-routing.module';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DragDropModule,
    TableModule,
    AppFormlyModule,
    ModalModule,
    PlaylistsAdminRoutingModule,
  ],
  declarations: [...Components],
  exports: [...ComponentsExport],
  providers: [
    {
      provide: 'COLUMNS',
      useValue: () => {
        return PlayListElements;
      },
    },
  ],
})
export class PlaylistsAdminModule {}
