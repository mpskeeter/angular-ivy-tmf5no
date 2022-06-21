import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaintenanceLog, FormTableElement } from '../../../../shared-types';
import { MaintenanceLogService } from '../../../../shared';
import { ModalService } from '../../../../modal';

@Component({
  selector: 'app-maintenance-log-table',
  templateUrl: './maintenance-log-table.component.html',
})
export class MaintenanceLogTableComponent implements OnInit {

  columns: Partial<FormTableElement>[] = [
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
      tableDisplay: false,
      display: false,
    },
    // accepted?: boolean;
    {
      label: 'Accepted',
      name: 'accepted',
      type: 'checkbox',
      data: (row: Partial<MaintenanceLog>) => null,
      tableDisplay: false,
      display: false,
    },
    // acceptedDate?: Date | string;
    {
      label: 'Date Accepted/Rejected',
      name: 'acceptedDate',
      type: 'date',
      dateFormat: 'yyyy-MM-dd',
      tableDisplay: false,
      display: false,
    },
  ];

  constructor(
    public service: MaintenanceLogService,
    public modalService: ModalService,
    // @Inject('COLUMNS') public columns: any,
    private router: Router,
  ) {}

  ngOnInit() {
    this.service.get();
  }

  add() {
    this.router.navigate(['/support/help']);
  }

  edit($event: Partial<MaintenanceLog>) {
    this.service.get($event.id);
    this.modalService.open();
    this.service.get();
  }

  delete(item: Partial<MaintenanceLog>) {
    this.service.remove(item);
  }
}
