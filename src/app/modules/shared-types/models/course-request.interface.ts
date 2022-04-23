import { BaseName } from './base-name.interface';
import { FormTableElement } from './form-table-element.interface';
import { RequestorInfo } from './requestor-info.interface';

export interface CourseRequest extends BaseName {
  requestedBy?: Partial<RequestorInfo>;
  requestedFor?: Partial<RequestorInfo>;
  type?: string;
  statusId?: number;
  description?: string;
  additionalDetails?: string;
  requestDate?: Date | string;
  completedBy?: Partial<RequestorInfo>;
}

export const CourseRequestElements: Partial<FormTableElement>[] = [
  {
    label: 'Requested By',
    name: 'requestedBy',
    type: 'RequestorInfoForm',
    tableDisplay: false,
    display: false,
  },
  {
    label: 'Requested For',
    name: 'requestedFor',
    type: 'RequestorInfoForm',
    tableDisplay: false,
    display: false,
  },
  {
    label: 'Course Name',
    name: 'name',
    type: 'text',
    required: true,
    tableDisplay: true,
    display: true,
  },
  // {
  //   label: 'Status',
  //   name: 'statusId',
  //   type: 'select',
  //   options: [],
  //   data: (row: Partial<CourseRequest>) => null,
  //   tableDisplay: true,
  // },
  {
    label: 'Description',
    name: 'description',
    type: 'textarea',
    tableDisplay: true,
    display: true,
  },
  {
    label: 'Additional Details',
    name: 'additionalDetails',
    type: 'text',
    tableDisplay: false,
    display: false,
  },
  // {
  //   label: 'Request Date',
  //   name: 'requestDate',
  //   type: 'date',
  //   dateFormat: 'yyyy-MM-dd',
  //   tableDisplay: true,
  // },
];
