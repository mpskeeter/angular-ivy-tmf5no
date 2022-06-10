import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayList } from '../../../../../shared-types';
import { PlayListService } from '../../../../../shared';
import { ModalService } from '../../../../../modal';

@Component({
  selector: 'app-playlists-table',
  templateUrl: './playlists-table.component.html',
})
export class PlaylistsTableComponent implements OnInit {
  constructor(
    public service: PlayListService,
    public modalService: ModalService,
    @Inject('COLUMNS') public columns: any,
    private router: Router,
  ) {}

  ngOnInit() {
    this.service.get();
  }

  add() {
    this.service.blank();
    this.modalService.open();
  }

  edit($event: Partial<PlayList>) {
    this.service.get($event.id);
    this.modalService.open();
    this.service.get();
  }

  delete(item: Partial<PlayList>) {
    this.service.remove(item);
  }
}
