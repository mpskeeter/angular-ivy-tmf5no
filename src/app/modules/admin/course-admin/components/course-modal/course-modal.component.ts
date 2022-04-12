import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { Course } from '../../../../shared-types';
import { CourseForm, CourseService, ModalService } from '../../../../shared';

@Component({
  selector: 'app-course-modal',
  templateUrl: './course-modal.component.html',
})
export class CourseModalComponent implements OnInit, OnDestroy {
  form: FormGroup = this.courseForm.generate();
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private courseForm: CourseForm,
    private service: CourseService,
    private modalService: ModalService,
    private router: Router,
    @Inject('COLUMNS') public elements: any,
  ) {}

  ngOnInit() {
    this.service.item$
      .pipe(takeUntil(this.destroy$))
      .subscribe((item: Course) => {
        if (!item) {
          this.form = this.courseForm.generate(null);
        } else {
          this.form.patchValue(this.courseForm.patch(item));
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  close() {
    this.modalService.close();
  }

  save(form: FormGroup) {
    this.service.save(this.courseForm.values(form));
    this.close();
  }
}
