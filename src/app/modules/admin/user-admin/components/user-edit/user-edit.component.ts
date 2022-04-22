import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { Role, User } from '../../../../shared-types';
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
      key: 'roles',
      type: 'multicheckbox',
      templateOptions: {
        type: 'array',
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
        this.model = {
          id: item.id,
          name: item.name,
          displayName: item.displayName,
          firstName: item.firstName,
          lastName: item.lastName,
          emailAddress: item.emailAddress,
          color: item.color,
          roles: item?.roles?.map((role) => role.name),
        };
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
    let roles: Partial<Role>[] = [];
    this.roleService.items$
      .pipe(takeUntil(this.destroy$))
      .subscribe((items) => (roles = items));

    console.log('model:before:', model);
    roles = model.roles.map((roleName) =>
      roles.find((role) => role.name === roleName),
    );
    model = {
      ...model,
      roles,
    };
    console.log('model:after:', model);
    this.service.save(model);
    this.close();
  }
}
