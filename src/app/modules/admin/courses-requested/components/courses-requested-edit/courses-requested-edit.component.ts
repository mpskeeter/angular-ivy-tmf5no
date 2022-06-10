import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CourseRequest } from '../../../../shared-types';
import { CourseRequestService, StatusService } from '../../../../shared';
import { ModalService } from '../../../../modal';

import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-courses-requested-edit',
  templateUrl: './courses-requested-edit.component.html',
})
export class CoursesRequestedEditComponent implements OnInit, OnDestroy {
  model: CourseRequest = {};
  options: FormlyFormOptions = {};

  fieldGroup = [
    //   name: record?.requestedBy?.name,
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        required: true,
        type: 'text',
        label: 'Name',
      },
    },
    //   email: record?.requestedBy?.email,
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        required: true,
        type: 'email',
        label: 'Email',
      },
    },
    //   phoneNumber: record?.requestedBy?.phoneNumber,
    {
      key: 'phoneNumber',
      type: 'input',
      templateOptions: {
        required: true,
        type: 'text',
        label: 'Phone Number',
      },
    },
  ];

  fields: FormlyFieldConfig[] = [
    // id: [record?.id || null],
    {
      key: 'id',
      type: 'input',
      hideExpression: 'true',
    },

    // requestedBy:
    {
      key: 'requestedBy',
      wrappers: ['contact'],
      templateOptions: { label: 'Requested By' },
      fieldGroupClassName: 'py-2 grid grid-cols-2 gap-2',
      fieldGroup: this.fieldGroup.map((item) => {
        return {
          key: item.key,
          type: item.type,
          templateOptions: {
            ...item.templateOptions,
            disabled: true,
          },
        };
      }),
    },

    // requestedFor:
    {
      key: 'requestedFor',
      wrappers: ['contact'],
      templateOptions: { label: 'Requested For' },
      fieldGroupClassName: 'py-2 grid grid-cols-2 gap-2',
      fieldGroup: this.fieldGroup.map((item) => {
        return {
          key: item.key,
          type: item.type,
          templateOptions: {
            ...item.templateOptions,
            disabled: true,
          },
        };
      }),
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
            disabled: true,
          },
        },

        // description: [record?.description],
        {
          key: 'description',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'Description',
            disabled: true,
          },
        },
      ],
    },

    {
      fieldGroupClassName: 'grid grid-cols-2 gap-4',
      fieldGroup: [
        // type: [record?.type || null],
        {
          key: 'type',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'Type',
            disabled: true,
          },
        },

        // requestDate: [record?.requestDate],
        {
          key: 'requestDate',
          type: 'input',
          templateOptions: {
            type: 'date',
            label: 'Requested Date',
            disabled: true,
          },
        },
      ],
    },

    // additionalDetails: [record?.additionalDetails],
    {
      key: 'additionalDetails',
      type: 'textarea',
      templateOptions: {
        label: 'Additional Details',
        rows: 5,
        disabled: true,
      },
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

    // completedBy:
    {
      key: 'completedBy',
      wrappers: ['contact'],
      templateOptions: { label: 'Completed By' },
      fieldGroupClassName: 'grid grid-cols-2 gap-2',
      fieldGroup: this.fieldGroup,
    },
  ];
  // statusId: [record?.statusId],

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    public service: CourseRequestService,
    public statusService: StatusService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.statusService.get();

    this.service.item$
      .pipe(takeUntil(this.destroy$))
      .subscribe((item: CourseRequest) => {
        this.model = {
          ...item,
          requestDate: this.convertDate(item?.requestDate as Date),
        };
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  convertDate = (date: Date): string => {
    const padStr = (i: number): string => {
      return i < 10 ? '0' + i : '' + i;
    };

    if (!date) return;
    const year = padStr(date.getFullYear());
    const month = padStr(date.getMonth() + 1);
    const day = padStr(date.getDate());
    const newDate = year + '-' + month + '-' + day;
    return newDate;
  };

  close() {
    this.modalService.close();
  }

  save(model: CourseRequest) {
    this.service.save(model);
    this.close();
  }
}
