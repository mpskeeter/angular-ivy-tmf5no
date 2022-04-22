import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseName } from './base-name.interface';
import { Role } from './role.interface';
import { FormTableElement } from './form-table-element.interface';
import { Enrollment } from './enrollment.interface';
import { Settings } from './settings.interface';
import { Watched } from './watched.interface';

export interface User extends BaseName {
  guid?: string;
  lastName?: string;
  firstName?: string;
  middleName?: string;
  displayName?: string;
  emailAddress?: string;
  distinguishedName?: string;
  samAccountName?: string;
  userPrincipalName?: string;
  voiceTelephoneNumber?: string;
  socketName?: string;
  picture?: string;
  color?: string;
  status?: string;

  settings?: Partial<Settings>;

  roles?: Partial<Role>[] | string[];
  enrollments?: Partial<Enrollment>[];
  watched?: Partial<Watched>[];
}

export const UserElements: Partial<FormTableElement>[] = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    required: true,
    tableDisplay: true,
    display: true,
  },
  {
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    tableDisplay: true,
    display: true,
  },
  {
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
    tableDisplay: true,
    display: true,
  },
  {
    name: 'middleName',
    label: 'Middle Name',
    type: 'text',
    tableDisplay: false,
    display: false,
  },
  {
    name: 'displayName',
    label: 'Display Name',
    type: 'text',
    tableDisplay: true,
    display: false,
  },
  {
    name: 'emailAddress',
    label: 'Email Address',
    type: 'text',
    tableDisplay: false,
    display: false,
  },
  {
    name: 'distinguishedName',
    label: 'Distinguished Name',
    type: 'text',
    tableDisplay: false,
    display: false,
  },
  {
    name: 'samAccountName',
    label: 'SAM Account Name',
    type: 'text',
    tableDisplay: false,
    display: false,
  },
  {
    name: 'userPrincipalName',
    label: 'User Princpal Name',
    type: 'text',
    tableDisplay: false,
    display: false,
  },
  {
    name: 'voiceTelephoneNumber',
    label: 'Voice Telephone Number',
    type: 'text',
    tableDisplay: false,
    display: false,
  },
  {
    name: 'picture',
    label: 'Image',
    type: 'text',
    tableDisplay: false,
    display: false,
  },
  {
    name: 'color',
    label: 'User Color',
    type: 'text',
    tableDisplay: true,
    display: true,
  },
  {
    name: 'roles',
    label: 'Roles',
    type: 'checkbox-group',
    options: [],
    tableDisplay: false,
    display: false,
  },
];
