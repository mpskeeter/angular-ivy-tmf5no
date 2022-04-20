import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { take, Untiltap } from 'rxjs/operators';
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
export class CourseTableComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    public service: CourseService,
    public modalService: ModalService,
    private router: Router,
    @Inject('COLUMNS') public columns: any,
  ) {}

  ngOnInit() {
    this.service.get();
    this.service.item$
      .pipe(
        tap((items) => console.log('courses:', items)),
        takeUntil(this.destroy$),
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
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
