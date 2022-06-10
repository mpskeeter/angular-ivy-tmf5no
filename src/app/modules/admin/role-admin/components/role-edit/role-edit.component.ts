import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Role } from '../../../../shared-types';
import { RoleService } from '../../../../shared';
import { ModalService } from '../../../../modal';

import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
})
export class RoleEditComponent implements OnInit, OnDestroy {
  model: Role = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    // id: [record?.id || null],
    {
      key: 'id',
      type: 'input',
      hideExpression: 'true',
    },
    // id: [record?.name || null],
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
  ];

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    public service: RoleService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.service.item$
      .pipe(takeUntil(this.destroy$))
      .subscribe((item: Role) => {
        this.model = {
          ...item,
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

  save(model: Role) {
    this.model = model;
    this.service.save(this.model);
    this.close();
  }
}
