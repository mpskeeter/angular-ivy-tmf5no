import { BaseName } from './base-name.interface';
import { FormTableElement } from './form-table-element.interface';
import { Item } from './item.interface';
import { Status } from './status.interface';
import { Tag } from './tag.interface';
import { User } from './user.interface';

import { formatDate } from '@angular/common';

export interface Source extends BaseName {
  seq?: number;
  description?: string;
  url?: string;
  mimeType?: string;
  thumbnail?: string;
  duration?: number;
  statusId?: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  deletedAt?: Date | string;
  authorId?: number;
  tags?: Tag[];
  status?: Partial<Status>;
  items?: Partial<Item>[];
  author?: Partial<User>;
  previewImages?: string[];
}

export const SourceElements: Partial<FormTableElement>[] = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    required: true,
    tableDisplay: true,
    display: true,
  },
  // {
  //   name: 'seq',
  //   label: 'Sequence',
  //   type: 'text',
  //   tableDisplay: true,
  //   display: true,
  // },
  {
    name: 'statusId',
    label: 'Status',
    type: 'select',
    options: [],
    data: (row: Partial<Source>) => row.status.name,
    tableDisplay: true,
    display: true,
  },
  {
    name: 'authorId',
    label: 'Author',
    type: 'select',
    options: [],
    data: (row: Partial<Source>) => row.author.name,
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
    name: 'url',
    label: 'Url',
    type: 'text',
    tableDisplay: true,
    display: true,
  },
  {
    name: 'mimeType',
    label: 'Mime/Type',
    type: 'text',
    tableDisplay: true,
    display: true,
  },
  {
    name: 'thumbnail',
    label: 'Thumbnail',
    type: 'text',
    tableDisplay: false,
    display: false,
  },
  {
    name: 'createdAt',
    label: 'Created',
    type: 'date',
    data: (row: Partial<Source>) => formatDate(row.createdAt,'yyyy-MM-dd','en-US'),
    dateFormat: 'yyyy-MM-dd',
    tableDisplay: false,
    display: false,
  },
  {
    name: 'updatedAt',
    label: 'Updated',
    type: 'date',
    data: (row: Partial<Source>) => formatDate(row.updatedAt,'yyyy-MM-dd','en-US'),
    dateFormat: 'yyyy-MM-dd',
    tableDisplay: false,
    display: false,
  },
  {
    name: 'deletedAt',
    label: 'Deleted',
    type: 'date',
    data: (row: Partial<Source>) => formatDate(row.deletedAt,'yyyy-MM-dd','en-US'),
    dateFormat: 'yyyy-MM-dd',
    tableDisplay: false,
    display: false,
  },
];
