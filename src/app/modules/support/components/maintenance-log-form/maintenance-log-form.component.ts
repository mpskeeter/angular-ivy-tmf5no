import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MaintenanceLog, User } from '../../../shared-types';
import {
  AuthenticatedUserService,
  BusinessImpactService,
  CategoryService,
  MaintenanceLogService,
  RequestTypeService,
  UrgencyTypeService,
} from '../../../shared';

@Component({
	selector: 'app-maintenance-log-form',
	templateUrl: './maintenance-log-form.component.html',
})
export class MaintenanceLogFormComponent implements OnInit, OnDestroy {
	model: MaintenanceLog = {};
	options: FormlyFormOptions = {};
	user: Partial<User> = {};

	fields: FormlyFieldConfig[] = [
		// id: [record?.id || null],
		{
			key: 'id',
			type: 'input',
			hideExpression: 'true',
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
						required: true,
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
              },
            },

            // fileDescription: [record?.fileDescription || null],
            {
              key: 'fileDescription',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'File Description',
                placeholder: 'Please describe what your file attachment represents',
              },
            },
          ],
        },
      ],
		},

		// submittedByName: [record?.submittedByName || null],
		// submittedDate: [convertDate(record?.submittedDate) || null],
		// accepted: [record?.accepted || null],
		// acceptedDate: [convertDate(record?.acceptedDate) || null],
		// statusId: [record?.statusId || null],
	];

	destroy$: Subject<boolean> = new Subject<boolean>();

	constructor(
		private service: MaintenanceLogService,
		private authenticatedUser: AuthenticatedUserService,
    private requestTypeService: RequestTypeService,
    private urgencyTypeService: UrgencyTypeService,
    private businessImpactService: BusinessImpactService,
    private categoryService: CategoryService,
		private router: Router
	) {}

	ngOnInit() {
    this.requestTypeService.get();
    this.urgencyTypeService.get();
    this.businessImpactService.get();
    this.categoryService.get();
		this.authenticatedUser.item$
			.pipe(takeUntil(this.destroy$))
			.subscribe((user: Partial<User>) => {
				this.user = user;
				this.model = {
          requestTypeId: 0,
          urgencyTypeId: 0,
          businessImpactId: 0,
          categoryId: 0,
          summary: '',
          fileAttachmentId: 0,
          fileDescription: '',
          statusId: 3,
				};
			});
	}

	ngOnDestroy() {
		this.destroy$.next(true);
		this.destroy$.complete();
	}

	close() {
		this.router.navigate(['/']);
	}

	save(model: Partial<MaintenanceLog>) {
		model.submittedDate = new Date();
		model.submittedByName = this.user?.displayName;
		model.acceptedDate = null;
		this.model = model;
		this.service.save(this.model);
		this.close();
	}
}