import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MaintenanceLog } from '../../../../shared-types';
import {
  convertDate,
  BusinessImpactService,
  CategoryService,
  MaintenanceLogService,
  RequestTypeService,
  StatusService,
  UrgencyTypeService,
} from '../../../../shared';
import { ModalService } from '../../../../modal';

@Component({
  selector: 'app-maintenance-log-edit',
  templateUrl: './maintenance-log-edit.component.html',
})
export class MaintenanceLogEditComponent implements OnInit, OnDestroy {
  model: MaintenanceLog = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    // id: [record?.id || null],
    {
      key: 'id',
      type: 'input',
      hideExpression: 'true',
    },

    // submittedByName: [record?.submittedByName || null],
    // submittedDate: [convertDate(record?.submittedDate) || null],
    {
      fieldGroupClassName: 'grid grid-cols-2 gap-4',
      fieldGroup: [
        // submittedByName: [record?.submittedByName || null],
        {
          key: 'submittedByName',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'Submitted By',
            disabled: true,
          },
        },
        // submittedDate: [convertDate(record?.submittedDate) || null],
        {
          key: 'submittedDate',
          type: 'input',
          templateOptions: {
            type: 'date',
            label: 'Submitted Date',
            disabled: true,
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

    // accepted: [record?.accepted || null],
    // acceptedDate: [convertDate(record?.acceptedDate) || null],
    {
      fieldGroupClassName: 'grid grid-cols-2 gap-4',
      fieldGroup: [
        // submittedByName: [record?.submittedByName || null],
        {
          key: 'accepted',
          type: 'checkbox',
          templateOptions: {
            type: 'boolean',
            label: 'Accepted',
          },
        },
        // acceptedDate: [convertDate(record?.acceptedDate) || null],
        {
          key: 'acceptedDate',
          type: 'input',
          templateOptions: {
            type: 'date',
            label: 'acceptedDate',
          },
        },
      ],
    },

    // requestTypeId: [record?.requestTypeId || null],
    // urgencyTypeId: [record?.urgencyTypeId || null],
    {
      fieldGroupClassName: 'grid grid-cols-2 gap-4',
      fieldGroup: [
        // requestTypeId: [record?.requestTypeId || null],
        {
          key: 'serviceRequestId',
          type: 'select',
          templateOptions: {
            label: 'Service Request Type',
            options: this.requestTypeService.items$,
            valueProp: 'id',
            labelProp: 'name',
            disabled: true,
          },
        },
        // urgencyTypeId: [record?.urgencyTypeId || null],
        {
          key: 'urgencyTypeId',
          type: 'select',
          templateOptions: {
            label: 'Urgency Type',
            options: this.urgencyTypeService.items$,
            valueProp: 'id',
            labelProp: 'name',
            disabled: true,
          },
        },
      ],
    },

    // businessImpactId: [record?.businessImpactId || null],
    // categoryId: [record?.categoryId || null],
    {
      fieldGroupClassName: 'grid grid-cols-2 gap-4',
      fieldGroup: [
        // businessImpactId: [record?.businessImpactId || null],
        {
          key: 'businessImpactId',
          type: 'select',
          templateOptions: {
            label: 'Business Impact',
            options: this.businessImpactService.items$,
            valueProp: 'id',
            labelProp: 'name',
            disabled: true,
          },
        },
        // categoryId: [record?.categoryId || null],
        {
          key: 'categoryId',
          type: 'select',
          templateOptions: {
            label: 'Category',
            options: this.categoryService.items$,
            valueProp: 'id',
            labelProp: 'name',
            disabled: true,
          },
        },
      ],
    },

    // summary: [record?.summary || null],
    // fileAttachmentId: [record?.fileAttachmentId || null],
    // fileDescription: [record?.fileDescription || null],
    {
      fieldGroupClassName: 'grid grid-cols-2 gap-4',
      fieldGroup: [
        // summary: [record?.summary || null],
        {
          key: 'summary',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'Summary',
            placeholder: 'Please summarize the problem',
            disabled: true,
          },
        },

        // fileAttachmentId: [record?.fileAttachmentId || null],
        // fileDescription: [record?.fileDescription || null],
        {
          fieldGroupClassName: 'grid grid-rows-2 gap-4',
          fieldGroup: [
            // fileAttachmentId: [record?.fileAttachmentId || null],
            {
              key: 'fileAttachmentId',
              type: 'file',
              templateOptions: {
                type: 'file',
                label: 'Image',
                disabled: true,
              },
            },

            // fileDescription: [record?.fileDescription || null],
            {
              key: 'fileDescription',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'File Description',
                placeholder:
                  'Please describe what your file attachment represents',
                disabled: true,
              },
            },
          ],
        },
      ],
    },
  ];

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    public service: MaintenanceLogService,
    private modalService: ModalService,
    private businessImpactService: BusinessImpactService,
    private categoryService: CategoryService,
    private requestTypeService: RequestTypeService,
    private statusService: StatusService,
    private urgencyTypeService: UrgencyTypeService
  ) {}

  ngOnInit() {
    this.businessImpactService.get();
    this.categoryService.get();
    this.requestTypeService.get();
    this.statusService.get();
    this.urgencyTypeService.get();

    this.service.item$
      .pipe(takeUntil(this.destroy$))
      .subscribe((logItem: Partial<MaintenanceLog>) => {
        this.model = {
          ...logItem,
          submittedDate: convertDate(logItem.submittedDate),
          acceptedDate: convertDate(logItem.acceptedDate),
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

  save(model: MaintenanceLog) {
    this.model = model;
    this.service.save(this.model);
    this.close();
  }
}
