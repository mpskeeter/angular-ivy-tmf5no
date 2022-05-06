import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PlayListSource } from '../../../../../shared-types';
import {
  MimeTypeService,
  PlayListSourceService,
  StatusService,
  UserService,
  convertDate,
} from '../../../../../shared';
import { ModalService } from '../../../../../modal';

import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-playlists-source-edit',
  templateUrl: './playlists-source-edit.component.html',
})
export class PlaylistsSourceEditComponent implements OnInit, OnDestroy {
  model: PlayListSource = {};
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
        // duration: [record?.duration],
        {
          key: 'duration',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'Duration',
          },
        },

        // authorId: [record?.authorId],
        {
          key: 'authorId',
          type: 'select',
          templateOptions: {
            label: 'Author',
            options: this.userService.items$,
            valueProp: 'id',
            labelProp: 'name',
          },
        },
      ],
    },

    {
      fieldGroupClassName: 'grid grid-cols-2 gap-4',
      fieldGroup: [
        // url: [record?.url],
        {
          key: 'url',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'URL',
          },
        },

        // mimeType: [record?.mimeType],
        {
          key: 'mimeType',
          type: 'select',
          templateOptions: {
            label: 'MimeType',
            options: this.mimeTypeService.items$,
            valueProp: 'name',
            labelProp: 'name',
          },
        },
      ],
    },

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

    // seq: [record?.seq],
    // thumbnail: [record?.thumbnail],
    // createdAt: [convertDate(record?.createdAt)],
    // updatedAt: [convertDate(record?.updatedAt)],
    // deletedAt: [convertDate(record?.deletedAt)],
  ];

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private service: PlayListSourceService,
    private userService: UserService,
    private statusService: StatusService,
    private modalService: ModalService,
    private mimeTypeService: MimeTypeService
  ) {}

  ngOnInit() {
    this.userService.get();
    this.statusService.get();
    this.service.item$
      .pipe(takeUntil(this.destroy$))
      .subscribe((item: PlayListSource) => {
        this.model = {
          ...item,
          createdAt: convertDate(item?.createdAt),
          updatedAt: convertDate(item?.updatedAt),
          deletedAt: convertDate(item?.deletedAt),
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

  save(model: PlayListSource) {
    this.model = model;
    this.service.save(this.model);
    this.close();
  }
}
