import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
// import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { Course, PlayList, Status } from '../../../../shared-types';
// import { CourseForm, CourseService, ModalService } from '../../../../shared';
import { ModalService } from '../../../../modal';
import {
  // CourseForm,
  CourseService,
  PlayListService,
  StatusService,
} from '../../../../shared';

import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
})
export class CourseEditComponent implements OnInit, OnDestroy {
  // form = new FormGroup({});
  model: Course = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    // id: [record?.id || null],
    {
      key: 'id',
      type: 'input',
      hideExpression: 'true',
    },

    // name: [record?.name || null],
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

    // playlistId: [record?.playlistId || null]
    {
      key: 'playlistId',
      type: 'select',
      templateOptions: {
        label: 'Playlist',
        options: this.playlistService.items$
          .pipe(
            map((item: Partial<PlayList>) => {
              return { label: item.name, value: item.id };
            }),
          )
          .subscribe((items) => items),
      },
    },

    // subject: [record?.subject || null],
    {
      key: 'subject',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Subject',
        placeholder: 'Subject',
      },
    },

    // description: [record?.description || null],
    {
      key: 'description',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Description',
        placeholder: 'Description',
      },
    },

    // statusId: [record?.statusId || null],
    {
      key: 'statusId',
      type: 'select',
      templateOptions: {
        label: 'Status',
        options: this.statusService.items$
          .pipe(
            map((item: Partial<Status>) => {
              return { label: item.name, value: item.id };
            }),
          )
          .subscribe((items) => items),
      },
    },

    // duration: [record?.duration || null],
    {
      key: 'duration',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Duration',
        placeholder: 'Duration',
      },
    },

    // datePublished: [convertDate(record?.datePublished) || null],
    {
      key: 'datePublished',
      type: 'input',
      templateOptions: {
        type: 'date',
        label: 'Published',
      },
    },

    // dateUpdated: [convertDate(record?.dateUpdated) || null],
    {
      key: 'dateUpdated',
      type: 'input',
      templateOptions: {
        type: 'date',
        label: 'Updated',
      },
    },

    // rating: [record?.rating || null],
    {
      key: 'rating',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Rating',
      },
    },

    // image: [record?.image || null],
    // statusId: [record?.statusId || null],
    // provider: [record?.provider || null],
  ];

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private service: CourseService,
    private playlistService: PlayListService,
    private statusService: StatusService,
    private modalService: ModalService,
  ) {}

  ngOnInit() {
    this.playlistService.get();
    this.service.item$
      .pipe(takeUntil(this.destroy$))
      .subscribe((item: Course) => {
        this.model = item;
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
    this.model = model;
    this.service.save(this.model);
    this.close();
  }
}
