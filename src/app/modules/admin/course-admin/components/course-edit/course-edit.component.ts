import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Course, PlayList, Status } from '../../../../shared-types';
import { ModalService } from '../../../../modal';
import {
  CourseService,
  PlayListService,
  StatusService,
  convertDate,
} from '../../../../shared';

import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
})
export class CourseEditComponent implements OnInit, OnDestroy {
  model: Course = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    // id: [record?.id || null],
    {
      key: 'id',
      type: 'input',
      hideExpression: 'true',
    },

    {
      fieldGroupClassName: 'grid grid-cols-2 gap-4',
      fieldGroup: [
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
            // options: this.playlists,
            options: this.playlistService.items$,
            valueProp: 'id',
            labelProp: 'name',
          },
        },
      ],
    },

    {
      fieldGroupClassName: 'grid grid-cols-2 gap-4',
      fieldGroup: [
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
      ],
    },

    {
      fieldGroupClassName: 'grid grid-cols-2 gap-4',
      fieldGroup: [
        // statusId: [record?.statusId || null],
        {
          key: 'statusId',
          type: 'select',
          templateOptions: {
            label: 'Status',
            options: this.statusService.items$,
            valueProp: 'id',
            labelProp: 'name',
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
      ],
    },

    {
      fieldGroupClassName: 'grid grid-cols-2 gap-4',
      fieldGroup: [
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
      ],
    },

    {
      fieldGroupClassName: 'grid grid-cols-2 gap-4',
      fieldGroup: [
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
        {
          key: 'image',
          type: 'file',
          templateOptions: {
            type: 'file',
            label: 'Image',
          },
        },
      ],
    },

    // provider: [record?.provider || null],
  ];

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private service: CourseService,
    private playlistService: PlayListService,
    private statusService: StatusService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.playlistService.get();
    this.statusService.get();
    this.service.item$
      .pipe(takeUntil(this.destroy$))
      .subscribe((item: Course) => {
        this.model = {
          ...item,
          datePublished: convertDate(item?.datePublished),
          dateUpdated: convertDate(item?.dateUpdated),
        };
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
