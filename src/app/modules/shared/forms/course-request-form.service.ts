import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseForm } from './base-form.service';
import { CourseRequest } from '../../shared-types';

import { convertDate } from './utils';

@Injectable()
export class CourseRequestForm extends BaseForm {
  constructor(protected fb: FormBuilder) {
    super(fb);
  }

  override parseRoute(route: ActivatedRoute) {
    super.parseRoute(route);
  }

  generate = (record: Partial<CourseRequest> = {}): FormGroup =>
    this.fb.group({
      id: [record?.id],
      requestedBy: {
        name: record?.requestedBy?.name,
        email: record?.requestedBy?.email,
        phoneNumber: record?.requestedBy?.phoneNumber,
      },
      requestedFor: {
        name: record?.requestedFor?.name,
        email: record?.requestedFor?.email,
        phoneNumber: record?.requestedFor?.phoneNumber,
      },
      name: [record?.name],
      description: [record?.description],
      additionalDetails: [record?.additionalDetails],
      statusId: [record?.statusId],
      type: [record?.type],
      requestDate: [convertDate(record?.requestDate)],
      completedBy: {
        name: record?.completedBy?.name,
        email: record?.completedBy?.email,
        phoneNumber: record?.completedBy?.phoneNumber,
      },
    });

  patch = (record: Partial<CourseRequest>) => ({
    ...record,
    requestDate: convertDate(record?.requestDate),
  });

  values = (form: FormGroup): Partial<CourseRequest> => form.value;

  // values = (form: FormGroup): Partial<CourseRequest> => ({
  //   id: form.get('id').value,
  //   requestedBy: {
  //     name: form.get('requestedBy.name').value,
  //     email: form.get('requestedBy.email').value,
  //     phoneNumber: form.get('requestedBy.phoneNumber').value,
  //   },
  //   requestedFor: {
  //     name: form.get('requestedFor.name').value,
  //     email: form.get('requestedFor.email').value,
  //     phoneNumber: form.get('requestedFor.phoneNumber').value,
  //   },
  //   name: form.get('name').value,
  //   description: form.get('description').value,
  //   type: form.get('type').value,
  //   additionalDetails: form.get('additionalDetails').value,
  //   statusId: parseInt(form.get('statusId').value, 10),
  //   requestDate: new Date(form.get('requestDate').value),
  //   completedBy: {
  //     name: form.get('completedBy.name').value,
  //     email: form.get('completedBy.email').value,
  //     phoneNumber: form.get('completedBy.phoneNumber').value,
  //   },
  // });
}
