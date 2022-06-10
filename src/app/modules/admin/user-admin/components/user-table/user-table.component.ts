import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserElements } from '../../../../shared-types';
import { UserService } from '../../../../shared';
import { ModalService } from '../../../../modal';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
})
export class UserTableComponent implements OnInit {
  constructor(
    public service: UserService,
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

  edit($event: Partial<User>) {
    this.service.get($event.id);
    this.modalService.open();
    this.service.get();
  }

  delete(item: Partial<User>) {
    this.service.remove(item);
  }
}
