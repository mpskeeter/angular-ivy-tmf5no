import { BaseId } from './base-id.interface';
import { FormTableElement } from './form-table-element.interface';

export interface MaintenanceLog extends BaseId {
  submittedByName?: string;
  submittedDate?: Date;
  issueType?: string;
  description?: string;
  accepted?: boolean;
  acceptedDate?: Date;
  statusId?: number;
}

export const MaintenanceLogElements: Partial<FormTableElement>[] = [
  {
    label: 'Issue Type',
    name: 'issueType',
    type: 'text',
    required: true,
    tableDisplay: true,
    display: true,
  },
  {
    label: 'Description',
    name: 'description',
    type: 'textarea',
    required: true,
    tableDisplay: true,
    display: true,
  },
];

export const MaintenanceLogAdminElements: Partial<FormTableElement>[] = [
  ...MaintenanceLogElements,
  {
    label: 'Submitted By',
    name: 'submittedByName',
    type: 'text',
    tableDisplay: true,
    display: true,
  },
  {
    label: 'Date Submitted',
    name: 'submittedDate',
    type: 'date',
    dateFormat: 'yyyy-MM-dd',
    tableDisplay: true,
    display: true,
  },
  {
    label: 'Status',
    name: 'statusId',
    type: 'select',
    options: [],
    data: (row: Partial<MaintenanceLog>) => null,
    tableDisplay: true,
    display: true,
  },
  {
    label: 'Accepted',
    name: 'accepted',
    type: 'checkbox',
    data: (row: Partial<MaintenanceLog>) => null,
    tableDisplay: true,
    display: true,
  },
  {
    label: 'Date Accepted/Rejected',
    name: 'acceptedDate',
    type: 'date',
    dateFormat: 'yyyy-MM-dd',
    tableDisplay: true,
    display: true,
  },
];
