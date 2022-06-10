import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseForm } from './base-form.service';
import { User } from '../../shared-types';

@Injectable()
export class UserForm extends BaseForm {
  constructor(protected fb: FormBuilder) {
    super(fb);
  }

  override parseRoute(route: ActivatedRoute) {
    super.parseRoute(route);
  }

  generate = (record: Partial<User> = {}): FormGroup =>
    this.fb.group({
    id: [record?.id],
    guid: [record?.guid],
    name: [record?.name],
    lastName: [record?.lastName],
    firstName: [record?.firstName],
    middleName: [record?.middleName],
    displayName: [record?.displayName],
    emailAddress: [record?.emailAddress],
    distinguishedName: [record?.distinguishedName],
    samAccountName: [record?.samAccountName],
    userPrincipalName: [record?.userPrincipalName],
    voiceTelephoneNumber: [record?.voiceTelephoneNumber],
    socketName: [record?.socketName],
    picture: [record?.picture],
    color: [record?.color],
    status: [record?.status],
    roles: [record?.roles],
  });

  patch = (record: Partial<User>) => ({
    ...record,
  });

  values = (form: FormGroup): Partial<User> => ({
    id: form.get('id').value,
    guid: form.get('guid').value,
    name: form.get('name').value,
    lastName: form.get('lastName').value,
    firstName: form.get('firstName').value,
    middleName: form.get('middleName').value,
    displayName: form.get('displayName').value,
    emailAddress: form.get('emailAddress').value,
    distinguishedName: form.get('distinguishedName').value,
    samAccountName: form.get('samAccountName').value,
    userPrincipalName: form.get('userPrincipalName').value,
    voiceTelephoneNumber: form.get('voiceTelephoneNumber').value,
    socketName: form.get('socketName').value,
    picture: form.get('picture').value,
    color: form.get('color').value,
    status: form.get('status').value,
    roles: form.get('roles').value,
  });
}
