import { BaseName } from './base-name.interface';
import { FormTableElement } from './form-table-element.interface';
import { Source } from './source.interface';
import { User } from './user.interface';
import { Status } from './status.interface';

export interface Item extends BaseName {
  seq?: number;
  description?: string;
  statusId?: number;
  createdAt?: Date | string ;
  updatedAt?: Date | string ;
  deletedAt?: Date | string ;
  authorId?: number;
  duration?: number;
  watched?: boolean;
  sources?: Partial<Source>[];
  status?: Partial<Status>[];
  author?: Partial<User>;
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
    data: (row: Partial<Item>) => null,
    tableDisplay: true,
    display: true,
  },
  {
    name: 'authorId',
    label: 'Author',
    type: 'select',
    options: [],
    data: (row: Partial<Item>) => null,
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
    dateFormat: 'yyyy-MM-dd',
    tableDisplay: false,
    display: false,
  },
  {
    name: 'updatedAt',
    label: 'Updated',
    type: 'date',
    dateFormat: 'yyyy-MM-dd',
    tableDisplay: false,
    display: false,
  },
  {
    name: 'deletedAt',
    label: 'Deleted',
    type: 'date',
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
