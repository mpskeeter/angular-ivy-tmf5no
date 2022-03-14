import { BaseName } from './base-name.interface';
import { CourseCategory } from './course-category.interface';
import { FormTableElement } from './form-table-element.interface';
import { PlayList } from './play-list.interface';
import { Status } from './status.interface';
import { Tag } from './tag.interface';

import { convertDate } from './utils';

export interface Course extends BaseName {
  playlistId?: number;
  subject?: string;
  image?: string;
  description?: string;
  statusId?: number;
  duration?: number;
  provider?: string;
  datePublished?: Date;
  dateUpdated?: Date;
  rating?: number;

  tags?: Partial<Tag>[];
  categories?: Partial<CourseCategory>[];
  playlist?: Partial<PlayList>;
  status?: Partial<Status>;
}

export const CourseElements: Partial<FormTableElement>[] = [
  {
    label: 'Course Name',
    name: 'name',
    type: 'text',
    required: true,
    tableDisplay: true,
  },
  {
    label: 'Playlist',
    name: 'playlistId',
    type: 'select',
    options: [],
    data: (row: Partial<Course>) => null,
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
  {
    label: 'Description',
    name: 'description',
    type: 'textarea',
    tableDisplay: false,
  },
  {
    label: 'Duration',
    name: 'duration',
    type: 'text',
    tableDisplay: false,
  },
  {
    label: 'Provider',
    name: 'provider',
    type: 'text',
    tableDisplay: false,
  },
  {
    label: 'Date Published',
    name: 'datePublished',
    type: 'date',
    dateFormat: 'yyyy-MM-dd',
    tableDisplay: true,
  },
  {
    label: 'Date Updated',
    name: 'dateUpdated',
    type: 'date',
    dateFormat: 'yyyy-MM-dd',
    tableDisplay: true,
  },
];