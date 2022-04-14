import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  Course,
  CourseElements,
  CourseAdminFilter,
} from '../../../../shared-types';

// import { CrudService, CourseService, ModalService } from '../../../../shared';
import { ModalService } from '../../../../modal';
import { CrudService, CourseService } from '../../../../shared';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
})
export class CourseTableComponent implements OnInit {
  // modalOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  // modalOpen$: Observable<boolean> = this.modalOpen.asObservable();

  constructor(
    public service: CourseService,
    public modalService: ModalService,
    @Inject('COLUMNS') public columns: any,
    private router: Router,
  ) {}

  ngOnInit() {
    this.service.get();
  }

  add() {
    // this.router.navigate(['/admin/course/add']);
    this.service.blank();
    this.modalService.open();
  }

  edit($event: Partial<Course>) {
    // this.router.navigate(['/admin/course/edit', $event.id]);
    this.service.get($event.id);
    this.modalService.open();
    this.service.get();
  }

  delete(item: Partial<Course>) {
    this.service.remove(item);
  }
}
