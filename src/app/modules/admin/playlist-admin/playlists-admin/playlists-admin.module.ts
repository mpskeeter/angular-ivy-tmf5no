import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PlayListElements } from '../../../shared-types';
import { SharedModule, PlayListForm } from '../../../shared';
import { TableModule } from '../../../table';
import { FormModule } from '../../../form';
import { ModalModule } from '../../../modal';
import { PlaylistsAdminRoutingModule } from './playlists-admin-routing.module';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DragDropModule,
    TableModule,
    FormModule,
    ModalModule,
    PlaylistsAdminRoutingModule,
  ],
  declarations: [...Components],
  exports: [...ComponentsExport],
  providers: [
    PlayListForm,
    {
      provide: 'COLUMNS',
      useValue: () => {
        return PlayListElements;
      },
    },
  ],
})
export class PlaylistsAdminModule {}
