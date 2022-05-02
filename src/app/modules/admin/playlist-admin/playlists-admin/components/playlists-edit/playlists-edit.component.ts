import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { PlayList } from '../../../../../shared-types';
import {
  PlayListService,
  StatusService,
  convertDate,
} from '../../../../../shared';
import { ModalService } from '../../../../../modal';

import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-playlists-edit',
  templateUrl: './playlists-edit.component.html',
})
export class PlaylistsEditComponent implements OnInit, OnDestroy {
  model: PlayList = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [

    // {
    //   // fieldGroupClassName: 'button rounded w-full p-3 shadow-sm bg-app-secondary text-app-secondary justify-center hover:opacity-90',
    //   fieldGroup: [
        {
          type: 'button',
          templateOptions: {
            text: 'Manage Items',
            class: 'button rounded w-full p-3 shadow-sm bg-app-secondary text-app-secondary justify-center hover:opacity-90',
            onClick: () => {
              this.close();
              this.router.navigate([
                '/admin/playlist/playlists/buildItems',
                this.model.id,
              ]);
            },
          },
        },
    //   ],
    // },

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

    // thumbnail: [record?.thumbnail],
    // createdAt: [convertDate(record?.createdAt)],
    // updatedAt: [convertDate(record?.updatedAt)],
    // deletedAt: [convertDate(record?.deletedAt)],
  ];

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private service: PlayListService,
    private statusService: StatusService,
    private modalService: ModalService,
    private router: Router
  ) {}

  ngOnInit() {
    this.statusService.get();
    this.service.item$
      .pipe(takeUntil(this.destroy$))
      .subscribe((item: PlayList) => {
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

  save(model: PlayList) {
    this.model = model;
    this.service.save(this.model);
    this.close();
  }
}
