import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { User } from '../../../../shared-types';
import { UserService, RoleService } from '../../../../shared';
import { ModalService } from '../../../../modal';

import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
})
export class UserEditComponent implements OnInit, OnDestroy {
  model: User = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    // id: [record?.id || null],
    {
      key: 'id',
      type: 'input',
      hideExpression: 'true',
    },

    // guid: [record?.guid],
    {
      key: 'guid',
      type: 'input',
      hideExpression: 'true',
    },

    {
      fieldGroupClassName: 'grid grid-cols-2 gap-4',
      fieldGroup: [
        // name: [record?.name || null],
        {
          key: 'name',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'Name',
            placeholder: 'Name',
            required: true,
          },
        },

        // displayName: [record?.displayName],
        {
          key: 'displayName',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'Display Name',
          },
        },
      ],
    },

    {
      fieldGroupClassName: 'grid grid-cols-2 gap-4',
      fieldGroup: [
        // firstName: [record?.firstName],
        {
          key: 'firstName',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'First Name',
          },
        },

        // lastName: [record?.lastName],
        {
          key: 'lastName',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'Last Name',
          },
        },
      ],
    },

    {
      fieldGroupClassName: 'grid grid-cols-2 gap-4',
      fieldGroup: [
        // firstName: [record?.firstName],
        {
          key: 'firstName',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'First Name',
          },
        },

        // lastName: [record?.lastName],
        {
          key: 'lastName',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'Last Name',
          },
        },
      ],
    },

    // roles: [record?.roles],
    {
      key: 'rolls',
      type: 'multicheckbox',
      templateOptions: {
        label: 'Roles',
        options: this.roleService.items$,
        valueProp: 'id',
        labelProp: 'name',
      },
    },
  ];

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private service: UserService,
    private roleService: RoleService,
    private modalService: ModalService,
  ) {}

  ngOnInit() {
    this.roleService.get();
    this.service.item$
      .pipe(takeUntil(this.destroy$))
      .subscribe((item: User) => {
        this.model = item;
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  close() {
    this.modalService.close();
  }

  save(model: User) {
    this.service.save(model);
    this.close();
  }
}
