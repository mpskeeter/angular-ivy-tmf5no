import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  Course,
  CourseElements,
  CourseAdminFilter,
} from '../../../../shared-types';
import { CrudService, CourseService } from '../../../../shared';
import { ModalService } from '../../../../modal';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
})
export class CourseTableComponent implements OnInit {
  constructor(
    public service: CourseService,
    public modalService: ModalService,
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

  edit($event: Partial<Course>) {
    this.service.get($event.id);
    this.modalService.open();
    this.service.get();
  }

  delete(item: Partial<Course>) {
    this.service.remove(item);
  }
}
