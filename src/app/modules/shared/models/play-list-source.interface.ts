import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item, Tag } from '../../shared-types';
import { BaseName } from './base-name.interface';
import { FormTableElement } from './form-table-element.interface';
import { User } from './user.interface';
import { convertDate } from './utils';

export interface PlayListSource extends BaseName {
  seq?: number;
  description?: string;
  url?: string;
  mimeType?: string;
  thumbnail?: string;
  duration?: number;
  statusId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  authorId?: number;
  tags?: Tag[];
  items?: Partial<Item>[];
  author?: Partial<User>;
}

@Injectable()
export class PlayListSourceForm {
  #id: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  id$: Observable<number> = this.#id.asObservable();

  constructor(private fb: FormBuilder) {}

  parseRoute(route: ActivatedRoute) {
    route.paramMap
      .pipe(
        map((params: ParamMap) => {
          const paramId = params.get('id');
          if (!paramId) return null;
          return parseInt(paramId, 10);
        })
      )
      .subscribe((id: number) => this.#id.next(id));
  }

  generate = (record: Partial<PlayListSource> = {}): FormGroup =>
    this.fb.group({
      id: [record?.id],
      name: [record?.name],
      seq: [record?.seq],
      description: [record?.description],
      url: [record?.url],
      mimeType: [record?.mimeType],
      thumbnail: [record?.thumbnail],
      statusId: [record?.statusId],
      createdAt: [convertDate(record?.createdAt)],
      updatedAt: [convertDate(record?.updatedAt)],
      deletedAt: [convertDate(record?.deletedAt)],
      authorId: [record?.authorId],
    });

  patch = (record: Partial<PlayListSource>) => ({
    ...record,
    createdAt: convertDate(record?.createdAt),
    updatedAt: convertDate(record?.updatedAt),
    deletedAt: convertDate(record?.deletedAt),
  });

  values = (form: FormGroup): Partial<PlayListSource> => ({
    id: form.get('id').value,
    name: form.get('name').value,
    seq: parseInt(form.get('seq').value, 10),
    description: form.get('description').value,
    url: form.get('url').value,
    mimeType: form.get('mimeType').value,
    thumbnail: form.get('thumbnail').value,
    statusId: parseInt(form.get('statusId').value, 10),
    createdAt: form.get('createdAt').value,
    updatedAt: form.get('updatedAt').value,
    deletedAt: form.get('deletedAt').value,
    authorId: parseInt(form.get('authorId').value, 10),
  });
}

export const PlayListSourceElements: Partial<FormTableElement>[] = [
  {
    name: 'name',
    label: 'Source Name',
    type: 'text',
    required: true,
    tableDisplay: true,
  },
  {
    name: 'seq',
    label: 'Sequence',
    type: 'text',
    tableDisplay: true,
  },
  {
    name: 'statusId',
    label: 'Status',
    type: 'select',
    options: [],
    data: (row: Partial<Item>) => null,
    tableDisplay: true,
  },
  {
    name: 'authorId',
    label: 'Author',
    type: 'select',
    options: [],
    data: (row: Partial<Item>) => null,
    tableDisplay: true,
  },
  {
    name: 'description',
    label: 'Description',
    type: 'textarea',
    tableDisplay: true,
  },
  {
    name: 'url',
    label: 'Url',
    type: 'text',
    tableDisplay: true,
  },
  {
    name: 'mimeType',
    label: 'Mime/Type',
    type: 'text',
    tableDisplay: true,
  },
  {
    name: 'thumbnail',
    label: 'Thumbnail',
    type: 'text',
    tableDisplay: true,
  },
  {
    name: 'createdAt',
    label: 'Date Created',
    type: 'date',
    dateFormat: 'yyyy-MM-dd',
    tableDisplay: true,
  },
  {
    name: 'updatedAt',
    label: 'Date Updated',
    type: 'date',
    dateFormat: 'yyyy-MM-dd',
    tableDisplay: true,
  },
  {
    name: 'deletedAt',
    label: 'Date Deleted',
    type: 'date',
    dateFormat: 'yyyy-MM-dd',
    tableDisplay: false,
  },
];
