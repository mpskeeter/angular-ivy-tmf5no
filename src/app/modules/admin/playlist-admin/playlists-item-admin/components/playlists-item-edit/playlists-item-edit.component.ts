import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { PlayListItem } from '../../../../../shared-types';
import {
  convertDate,
  PlayListItemService,
  StatusService,
  UserService,
} from '../../../../../shared';
import { ModalService } from '../../../../../modal';

import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-playlists-item-edit',
  templateUrl: './playlists-item-edit.component.html',
})
export class PlaylistsItemEditComponent implements OnInit, OnDestroy {
  model: PlayListItem = {};
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
    // createdAt: [convertDate(record?.createdAt)],
    // updatedAt: [convertDate(record?.updatedAt)],
    // deletedAt: [convertDate(record?.deletedAt)],
  ];

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private service: PlayListItemService,
    private statusService: StatusService,
    private userService: UserService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.statusService.get();
    this.userService.get();
    this.service.item$
      .pipe(takeUntil(this.destroy$))
      .subscribe((item: PlayListItem) => {
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

  save(model: PlayListItem) {
    this.model = model;
    this.service.save(this.model);
    this.close();
  }
}
