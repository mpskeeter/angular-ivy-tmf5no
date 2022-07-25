import { BaseName } from './base-name.interface';
import { FormTableElement } from './form-table-element.interface';
import { ItemSource } from './item-source.interface';
import { Source } from './source.interface';
import { Status } from './status.interface';
import { User } from './user.interface';

import { formatDate } from '@angular/common';

export interface Item extends BaseName {
  seq?: number;
  description?: string;
  statusId?: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  deletedAt?: Date | string;
  authorId?: number;
  duration?: number;
  watched?: boolean;
  sources?: Partial<Source>[];
  status?: Partial<Status>;
  author?: Partial<User>;

  itemSources?: Partial<ItemSource>[];
}

export const ItemElements: Partial<FormTableElement>[] = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    required: true,
    tableDisplay: true,
    display: true,
  },
  {
    name: 'statusId',
    label: 'Status',
    type: 'select',
    options: [],
    data: (row: Partial<Item>) => row.status.name,
    tableDisplay: true,
    display: true,
  },
  {
    name: 'authorId',
    label: 'Author',
    type: 'select',
    options: [],
    data: (row: Partial<Item>) => row.author.name,
    tableDisplay: true,
    display: true,
  },
  {
    name: 'description',
    label: 'Description',
    type: 'textarea',
    tableDisplay: true,
    display: true,
  },
  {
    name: 'seq',
    label: 'Sequence',
    type: 'text',
    tableDisplay: false,
    display: false,
  },
  {
    name: 'createdAt',
    label: 'Created',
    type: 'date',
    data: (row: Partial<Source>) =>
      formatDate(row.createdAt, 'yyyy-MM-dd', 'en-US'),
    dateFormat: 'yyyy-MM-dd',
    tableDisplay: false,
    display: false,
  },
  {
    name: 'updatedAt',
    label: 'Updated',
    type: 'date',
    data: (row: Partial<Source>) =>
      formatDate(row.updatedAt, 'yyyy-MM-dd', 'en-US'),
    dateFormat: 'yyyy-MM-dd',
    tableDisplay: false,
    display: false,
  },
  {
    name: 'deletedAt',
    label: 'Deleted',
    type: 'date',
    data: (row: Partial<Source>) =>
      formatDate(row.deletedAt, 'yyyy-MM-dd', 'en-US'),
    dateFormat: 'yyyy-MM-dd',
    tableDisplay: false,
    display: false,
  },
  {
    name: 'duration',
    label: 'Duration',
    type: 'text',
    tableDisplay: false,
    display: false,
  },
  {
    name: 'watched',
    label: 'Watched',
    type: 'text',
    tableDisplay: false,
    display: false,
  },
];
