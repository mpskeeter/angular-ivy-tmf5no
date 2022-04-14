import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseRequest } from '../../../../shared-types';
import { CourseRequestService } from '../../../../shared';
import { ModalService } from '../../../../modal';

@Component({
  selector: 'app-courses-requested-table',
  templateUrl: './courses-requested-table.component.html',
})
export class CoursesRequestedTableComponent implements OnInit {
  constructor(
    public service: CourseRequestService,
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

  edit($event: Partial<CourseRequest>) {
    this.service.get($event.id);
    this.modalService.open();
    this.service.get();
  }

  delete(item: Partial<CourseRequest>) {
    this.service.remove(item);
  }
}
