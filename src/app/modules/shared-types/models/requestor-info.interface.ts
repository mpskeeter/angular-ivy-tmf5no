import { BaseId } from './base-id.interface';
import { FormTableElement } from './form-table-element.interface';

// export interface RequestorInfo extends BaseId {
export interface RequestorInfo {
  name?: string;
  email?: string;
  phoneNumber?: string;
}

export const RequestorInfoElements: Partial<FormTableElement>[] = [
  {
    label: '',
    name: 'name',
    type: 'text',
    required: true,
    tableDisplay: true,
  },
  {
    label: 'Email',
    name: 'email',
    type: 'text',
    tableDisplay: true,
  },
  {
    label: 'Phone Number',
    name: 'phoneNumber',
    type: 'text',
    tableDisplay: false,
    display: true,
  },
];
