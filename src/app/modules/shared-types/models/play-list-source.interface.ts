import { BaseName } from './base-name.interface';
import { FormTableElement } from './form-table-element.interface';
import { PlayListItem } from './play-list-item.interface';
import { Tag } from './tag.interface';
import { User } from './user.interface';

export interface PlayListSource extends BaseName {
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
  items?: Partial<PlayListItem>[];
  author?: Partial<User>;
}

export const PlayListSourceElements: Partial<FormTableElement>[] = [
  {
    name: 'name',
    label: 'Source Name',
    type: 'text',
    required: true,
    tableDisplay: true,
    display: true,
  },
  {
    name: 'seq',
    label: 'Sequence',
    type: 'text',
    tableDisplay: true,
    display: true,
  },
  {
    name: 'statusId',
    label: 'Status',
    type: 'select',
    options: [],
    data: (row: Partial<PlayListItem>) => null,
    tableDisplay: true,
    display: true,
  },
  {
    name: 'authorId',
    label: 'Author',
    type: 'select',
    options: [],
    data: (row: Partial<PlayListItem>) => null,
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
    tableDisplay: true,
    display: true,
  },
  {
    name: 'createdAt',
    label: 'Date Created',
    type: 'date',
    dateFormat: 'yyyy-MM-dd',
    tableDisplay: true,
    display: true,
  },
  {
    name: 'updatedAt',
    label: 'Date Updated',
    type: 'date',
    dateFormat: 'yyyy-MM-dd',
    tableDisplay: true,
    display: true,
  },
  {
    name: 'deletedAt',
    label: 'Date Deleted',
    type: 'date',
    dateFormat: 'yyyy-MM-dd',
    tableDisplay: false,
    display: false,
  },
];
