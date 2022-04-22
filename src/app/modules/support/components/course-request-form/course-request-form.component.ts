import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { CourseRequestForm, CourseRequestService } from '../../../shared';
import { CourseRequest } from '../../../shared-types';

@Component({
  selector: 'app-course-request-form',
  templateUrl: './course-request-form.component.html',
})
export class CourseRequestFormComponent {
  model: CourseRequest = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    // id: [record?.id || null],
    // {
    //   key: 'id',
    //   type: 'input',
    //   hideExpression: 'true',
    // },

    // requestedBy:
    {
      key: 'requestedBy',
      wrappers: ['contact'],
      templateOptions: { label: 'Requested By' },
      fieldGroupClassName: 'grid grid-cols-3 gap-2',
      fieldGroup: [
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
          type: 'email',
          templateOptions: {
            required: true,
            type: 'email',
            label: 'Email Address',
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
      ],
    },

    // requestedFor:
    {
      key: 'requestedFor',
      wrappers: ['contact'],
      templateOptions: { label: 'Requested For' },
      fieldGroupClassName: 'grid grid-cols-3 gap-2',
      fieldGroup: [
        //   name: record?.requestedFor?.name,
        {
          key: 'name',
          type: 'input',
          templateOptions: {
            required: true,
            type: 'text',
            label: 'Name',
          },
        },
        //   email: record?.requestedFor?.email,
        {
          key: 'email',
          type: 'email',
          templateOptions: {
            required: true,
            type: 'email',
            label: 'Email Address',
          },
        },
        //   phoneNumber: record?.requestedFor?.phoneNumber,
        {
          key: 'phoneNumber',
          type: 'input',
          templateOptions: {
            required: true,
            type: 'text',
            label: 'Phone Number',
          },
        },
      ],
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

        // description: [record?.description],
        {
          key: 'description',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'Description',
          },
        },
      ],
    },

    {
      fieldGroupClassName: 'grid grid-cols-2 gap-4',
      fieldGroup: [
        // additionalDetails: [record?.additionalDetails],
        {
          key: 'additionalDetails',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'Additional Details',
          },
        },

        // type: [record?.type],
        {
          key: 'type',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'Type',
          },
        },
      ],
    },
  ];
  // statusId: [record?.statusId],
  // requestDate: [convertDate(record?.requestDate)],
  // completedBy: {
  //   name: record?.completedBy?.name,
  //   email: record?.completedBy?.email,
  //   phoneNumber: record?.completedBy?.phoneNumber,
  // },

  constructor(
    private service: CourseRequestService,
    private courseRequestForm: CourseRequestForm,
    // @Inject('COURSE-REQUEST-COLUMNS') public elements: any,
    private router: Router,
  ) {}

  
  close() {
    this.router.navigate(['/']);
  }

  save(model: CourseRequest) {
    this.service.save(this.model);
    this.close();
  }
}
