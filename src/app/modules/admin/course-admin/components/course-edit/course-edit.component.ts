import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { Course } from '../../../../shared-types';
// import { CourseForm, CourseService, ModalService } from '../../../../shared';
import { ModalService } from '../../../../modal';
import { CourseForm, CourseService } from '../../../../shared';

import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
})
export class CourseEditComponent implements OnInit, OnDestroy {
  // form = new FormGroup({});
  model: Partial<Course> = {};
  options: FormlyFormOptions = {};

  // form: FormGroup = this.courseForm.generate();
  destroy$: Subject<boolean> = new Subject<boolean>();

  fields: FormlyFieldConfig[] = [
    {
      key: 'id',
      type: 'input',
      hideExpression: true,
    },
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'Name',
        required: true,
      },
    },
    {
      key: 'subject',
      type: 'input',
      templateOptions: {
        label: 'Subject',
        placeholder: 'Subject',
      },
    },
    {
      key: 'description',
      type: 'input',
      templateOptions: {
        label: 'Description',
        placeholder: 'Description',
      },
    },

    // id: [record?.id || null],
    // name: [record?.name || null],
    // playlistId: [record?.playlistId || null],
    // subject: [record?.subject || null],
    // image: [record?.image || null],
    // description: [record?.description || null],
    // statusId: [record?.statusId || null],
    // duration: [record?.duration || null],
    // provider: [record?.provider || null],
    // datePublished: [convertDate(record?.datePublished) || null],
    // dateUpdated: [convertDate(record?.dateUpdated) || null],
    // rating: [record?.rating || null],
  ];

  constructor(
    // private courseForm: CourseForm,
    private service: CourseService,
    private modalService: ModalService // private router: Router, // @Inject('COLUMNS') public elements: any,
  ) {}

  ngOnInit() {
    // this.service.item$
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((item: Course) => {
    //     if (!item) {
    //       this.form = this.courseForm.generate(null);
    //     } else {
    //       this.form.patchValue(this.courseForm.patch(item));
    //     }
    //   });

    this.service.item$
      .pipe(takeUntil(this.destroy$))
      .subscribe((item: Course) => {
        this.model = !item ? item : null;
        console.log('model:', this.model);
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  close() {
    this.modalService.close();
  }

  save(model: Course) {
    // save(form: FormGroup) {
    // this.service.save(this.courseForm.values(form));
    this.model = model;
    this.service.save(this.model);
    this.close();
  }
}
