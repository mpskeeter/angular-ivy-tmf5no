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
  // form: FormGroup;
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
    // this.form = this.courseForm.generate();
    this.service.item$
      .pipe(
        // tap((item: Course) => console.log('tap:item:', item)),
        // tap((item: Course) => (this.form = this.courseForm.generate())),
        takeUntil(this.destroy$),
      )
      .subscribe((item: Course) => {
        console.log('subscribe:item:', item);
        if (!item) this.form = this.courseForm.generate(null);
        // this.form = this.courseForm.generate(item);
        this.form.patchValue(this.courseForm.patch(item));
        console.log('this.form:', this.form);
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
