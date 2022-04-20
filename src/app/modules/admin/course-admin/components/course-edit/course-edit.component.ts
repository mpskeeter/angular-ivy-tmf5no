import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
// import { Router } from '@angular/router';
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
  model = this.service.item$;
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'id',
      type: 'input',
      hideExpression: 'true',
    },
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Name',
        placeholder: 'Name',
        required: true,
      },
    },
    {
      key: 'subject',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Subject',
        placeholder: 'Subject',
      },
    },
    {
      key: 'description',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Description',
        placeholder: 'Description',
      },
    },

    {
      key: 'duration',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Duration',
        placeholder: 'Duration',
      },
    },

    {
      key: 'datePublished',
      type: 'input',
      templateOptions: {
        type: 'date',
        label: 'Published',
      },
    },

    {
      key: 'dateUpdated',
      type: 'input',
      templateOptions: {
        type: 'date',
        label: 'Updated',
      },
    },

    {
      key: 'rating',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Rating',
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

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private service: CourseService,
    private modalService: ModalService,
  ) {}

  ngOnInit() {
    // this.service.item$
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((item: Course) => {
    //     this.model = item;
    //   });
  }

  ngOnDestroy() {
    // this.destroy$.next(true);
    // this.destroy$.complete();
  }

  close() {
    this.modalService.close();
  }

  save(model: Course) {
    // this.model = model;
    this.service.save(model);
    this.close();
  }
}
