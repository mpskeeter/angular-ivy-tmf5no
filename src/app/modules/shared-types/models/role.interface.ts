import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseName } from './base-name.interface';
import { FormTableElement } from './form-table-element.interface';

export interface Role extends BaseName {}

export const generateRoleForm = (
  fb: FormBuilder,
  record: Partial<Role> = {}
): FormGroup =>
  fb.group({
    id: [record?.id],
    name: [record?.name],
  });

export const generateRoleFromForm = (form: FormGroup): Partial<Role> => ({
  id: form.get('id').value,
  name: form.get('name').value,
});

export const RoleElements: Partial<FormTableElement>[] = [
  {
    name: 'name',
    label: 'Role',
    type: 'text',
    required: true,
    tableDisplay: true,
    display: true,
  },
];
