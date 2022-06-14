import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role, RoleElements } from '../../../../shared-types';
import { RoleService } from '../../../../shared';
import { ModalService } from '../../../../modal';

@Component({
  selector: 'app-role-table',
  templateUrl: './role-table.component.html',
})
export class RoleTableComponent implements OnInit {
  title: string = '';

  constructor(
    public service: RoleService,
    public modalService: ModalService,
    @Inject('COLUMNS') public columns: any,
    private router: Router
  ) {}

  ngOnInit() {
    this.service.get();
  }

  add() {
    this.title = 'Add new Role';
    this.service.blank();
    this.modalService.open();
  }

  edit($event: Partial<Role>) {
    this.title = 'Edit Role ' + $event.name;
    this.service.get($event.id);
    this.modalService.open();
    this.service.get();
  }

  delete(item: Partial<Role>) {
    this.service.remove(item);
  }
}
