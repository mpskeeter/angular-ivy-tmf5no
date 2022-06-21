import { BaseId } from './base-id.interface';
import { FormTableElement } from './form-table-element.interface';

export interface MaintenanceLog extends BaseId {
  submittedByName?: string;       //
  submittedDate?: Date | string;  //
  requestTypeId?: number;         //
  urgencyTypeId?: number;         //
  businessImpactId?: number;      //
  categoryId?: number;            //
  summary?: string;               //
  fileAttachmentId?: number;
  fileDescription?: string;
  accepted?: boolean;             //
  acceptedDate?: Date | string;   //
  statusId?: number;              //
}

export const MaintenanceLogElements: Partial<FormTableElement>[] = [
  // summary?: string;
  {
    label: 'Summary',
    name: 'summary',
    type: 'text',
    data: (row: Partial<MaintenanceLog>) => row.summary?.substring(0, 30),
    tableDisplay: true,
    display: true,
  },
  // requestTypeId?: number;
  {
    label: 'Request',
    name: 'requestTypeId',
    type: 'select',
    options: [],
    data: (row: Partial<MaintenanceLog>) => null,
    tableDisplay: true,
    display: true,
  },
  // urgencyTypeId?: number;
  {
    label: 'Urgency',
    name: 'urgencyTypeId',
    type: 'select',
    options: [],
    data: (row: Partial<MaintenanceLog>) => null,
    tableDisplay: true,
    display: true,
  },
  // businessImpactId?: number;
  {
    label: 'Business Impact',
    name: 'businessImpactId',
    type: 'select',
    options: [],
    data: (row: Partial<MaintenanceLog>) => null,
    tableDisplay: true,
    display: true,
  },
  // categoryId?: number;
  {
    label: 'Category',
    name: 'categoryId',
    type: 'select',
    options: [],
    data: (row: Partial<MaintenanceLog>) => null,
    tableDisplay: true,
    display: true,
  },
];

export const MaintenanceLogAdminElements: Partial<FormTableElement>[] = [
  ...MaintenanceLogElements,
  // submittedByName?: string;
  {
    label: 'Submitted By',
    name: 'submittedByName',
    type: 'text',
    tableDisplay: true,
    display: true,
  },
  // submittedDate?: Date | string;
  {
    label: 'Date Submitted',
    name: 'submittedDate',
    type: 'date',
    dateFormat: 'yyyy-MM-dd',
    tableDisplay: true,
    display: true,
  },
  // statusId?: number;
  {
    label: 'Status',
    name: 'statusId',
    type: 'select',
    options: [],
    data: (row: Partial<MaintenanceLog>) => null,
    tableDisplay: true,
    display: true,
  },
  // accepted?: boolean;
  {
    label: 'Accepted',
    name: 'accepted',
    type: 'checkbox',
    data: (row: Partial<MaintenanceLog>) => null,
    tableDisplay: true,
    display: true,
  },
  // acceptedDate?: Date | string;
  {
    label: 'Date Accepted/Rejected',
    name: 'acceptedDate',
    type: 'date',
    dateFormat: 'yyyy-MM-dd',
    tableDisplay: true,
    display: true,
  },
];
