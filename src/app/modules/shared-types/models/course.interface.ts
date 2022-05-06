import { BaseName } from './base-name.interface';
import { Category } from './category.interface';
import { FormTableElement } from './form-table-element.interface';
import { PlayList } from './play-list.interface';
import { Status } from './status.interface';
import { Tag } from './tag.interface';

export interface Course extends BaseName {
  playlistId?: number;
  subject?: string;
  image?: string;
  description?: string;
  statusId?: number;
  duration?: number;
  provider?: string;
  datePublished?: Date | string;
  dateUpdated?: Date | string;
  rating?: number;

  tags?: Partial<Tag>[];
  categories?: Partial<Category>[];
  playlist?: Partial<PlayList>;
  status?: Partial<Status>;
}

export const CourseElements: Partial<FormTableElement>[] = [
  // {
  //   label: 'ID',
  //   name: 'id',
  //   type: 'text',
  //   tableDisplay: false,
  //   display: false,
  // },
  {
    label: 'Course Name',
    name: 'name',
    type: 'text',
    required: true,
    tableDisplay: true,
    display: true,
  },
  {
    label: 'Playlist',
    name: 'playlistId',
    type: 'select',
    options: [],
    data: (row: Partial<Course>) => null,
    tableDisplay: true,
    display: true,
  },
  {
    label: 'Status',
    name: 'statusId',
    type: 'select',
    options: [],
    data: (row: Partial<Course>) => null,
    tableDisplay: true,
    display: true,
  },
  {
    label: 'Subject',
    name: 'subject',
    type: 'text',
    tableDisplay: false,
    display: false,
  },
  {
    label: 'Description',
    name: 'description',
    type: 'textarea',
    tableDisplay: false,
    display: false,
  },
  {
    label: 'Duration',
    name: 'duration',
    type: 'text',
    tableDisplay: false,
    display: false,
  },
  {
    label: 'Provider',
    name: 'provider',
    type: 'text',
    tableDisplay: false,
    display: false,
  },
  {
    label: 'Date Published',
    name: 'datePublished',
    type: 'date',
    dateFormat: 'yyyy-MM-dd',
    tableDisplay: true,
    display: true,
  },
  {
    label: 'Date Updated',
    name: 'dateUpdated',
    type: 'date',
    dateFormat: 'yyyy-MM-dd',
    tableDisplay: true,
    display: true,
  },
];

export const CourseAdminFilter: Partial<FormTableElement>[] = [
  {
    label: 'Course Name',
    name: 'name',
    type: 'text',
    required: true,
    tableDisplay: true,
  },
  {
    label: 'Status',
    name: 'statusId',
    type: 'select',
    options: [],
    data: (row: Partial<Course>) => null,
    tableDisplay: true,
  },
  {
    label: 'Subject',
    name: 'subject',
    type: 'text',
    tableDisplay: false,
  },
];
