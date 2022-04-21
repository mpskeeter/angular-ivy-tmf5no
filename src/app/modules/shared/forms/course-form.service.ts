import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseForm } from './base-form.service';
import { Course } from '../../shared-types';

import { convertDate } from './utils';

@Injectable()
export class CourseForm extends BaseForm {
  constructor(protected fb: FormBuilder) {
    super(fb);
  }

  override parseRoute(route: ActivatedRoute) {
    super.parseRoute(route);
  }

  generate = (record: Partial<Course> = {}): FormGroup =>
    this.fb.group({
      id: [record?.id || null],
      name: [record?.name || null],
      playlistId: [record?.playlistId || null],
      subject: [record?.subject || null],
      image: [record?.image || null],
      description: [record?.description || null],
      statusId: [record?.statusId || null],
      duration: [record?.duration || null],
      provider: [record?.provider || null],
      datePublished: [convertDate(record?.datePublished as Date) || null],
      dateUpdated: [convertDate(record?.dateUpdated as Date) || null],
      rating: [record?.rating || null],
    });

  patch = (record: Partial<Course> | null) => {
    // console.log('record:', record);
    const retValue = {
      ...record,
      datePublished: record?.datePublished
        ? convertDate(record?.datePublished as Date)
        : null,
      dateUpdated: record?.dateUpdated
        ? convertDate(record?.dateUpdated as Date)
        : null,
    };

    if (!record?.datePublished) {
      delete retValue.datePublished;
    }

    if (!record?.dateUpdated) {
      delete retValue.dateUpdated;
    }

    // console.log('retValue:', retValue);

    return retValue;
  };

  values = (form: FormGroup): Partial<Course> => ({
    id: form.get('id').value,
    name: form.get('name').value,
    playlistId: parseInt(form.get('playlistId').value, 10),
    subject: form.get('subject').value,
    image: form.get('image').value,
    description: form.get('description').value,
    statusId: parseInt(form.get('statusId').value, 10),
    duration: form.get('duration').value,
    provider: form.get('provider').value,
    datePublished: new Date(form.get('dateUpdated').value),
    dateUpdated: new Date(form.get('dateUpdated').value),
    rating: form.get('rating').value,
  });
}
