import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import {
  AuthenticatedUserService,
  CourseRequestService,
} from '../../../shared';
import { CourseRequest, User } from '../../../shared-types';

@Component({
  selector: 'app-course-request-form',
  templateUrl: './course-request-form.component.html',
})
export class CourseRequestFormComponent implements OnInit, OnDestroy {
  model: Partial<CourseRequest> = {};
  options: FormlyFormOptions = {};

  destroy$: Subject<boolean> = new Subject<boolean>();

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
          type: 'input',
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
          type: 'input',
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

    // type: [record?.type || null],
    {
      key: 'type',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Type',
      },
    },

    // additionalDetails: [record?.additionalDetails],
    {
      key: 'additionalDetails',
      type: 'textarea',
      templateOptions: {
        label: 'Additional Details',
        rows: 5,
      },
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
    private userService: AuthenticatedUserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userService.item$
      .pipe(
        map((user: Partial<User>) => {
          this.model = {
            requestedBy: {
              name: user.displayName,
              email: user.emailAddress,
              phoneNumber: user.voiceTelephoneNumber,
            },
            requestedFor: {
              name: user.displayName,
              email: user.emailAddress,
              phoneNumber: user.voiceTelephoneNumber,
            }
          };
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  close() {
    this.router.navigate(['/']);
  }

  save(model: Partial<CourseRequest>) {
    console.log('save:model:', model);
    //TODO: not sure if we need to set this here,
    //      or do we set this above and not display in the form
    // this.model.requestedBy = {
    //   name: this.user.displayName,
    //   email: this.user.emailAddress,
    //   phoneNumber: this.user.voiceTelephoneNumber,
    // };
    this.model.requestDate = new Date();
    this.service.save(this.model);
    this.close();
  }
}
