import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayListSource } from '../../../../../shared-types';
import { PlayListSourceService } from '../../../../../shared';
import { ModalService } from '../../../../../modal';

@Component({
  selector: 'app-playlists-source-table',
  templateUrl: './playlists-source-table.component.html',
})
export class PlaylistsSourceTableComponent implements OnInit {
  constructor(
    public service: PlayListSourceService,
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

  edit($event: Partial<PlayListSource>) {
    this.service.get($event.id);
    this.modalService.open();
    this.service.get();
  }

  delete(item: Partial<PlayListSource>) {
    this.service.remove(item);
  }
}
