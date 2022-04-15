import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayListItem } from '../../../../../shared-types';
import { PlayListItemService } from '../../../../../shared';
import { ModalService } from '../../../../../modal';

@Component({
  selector: 'app-playlists-item-table',
  templateUrl: './playlists-item-table.component.html',
})
export class PlaylistsItemTableComponent implements OnInit {
  constructor(
    public service: PlayListItemService,
    private modalService: ModalService,
    private router: Router,
    @Inject('COLUMNS') public columns: any,
  ) {}

  ngOnInit() {
    this.service.get();
  }

  add() {
    this.service.blank();
    this.modalService.open();
  }

  edit($event: Partial<PlayListItem>) {
    this.service.get($event.id);
    this.modalService.open();
    this.service.get();
  }

  delete(item: Partial<PlayListItem>) {
    this.service.remove(item);
  }
}
