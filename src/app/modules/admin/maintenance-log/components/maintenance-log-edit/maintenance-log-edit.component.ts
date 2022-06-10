import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MaintenanceLog } from '../../../../shared-types';
import { MaintenanceLogForm, MaintenanceLogService } from '../../../../shared';
import { ModalService } from '../../../../modal';

@Component({
  selector: 'app-maintenance-log-edit',
  templateUrl: './maintenance-log-edit.component.html',
})
export class MaintenanceLogEditComponent implements OnInit, OnDestroy {
  form: FormGroup = this.maintenanceLogForm.generate();
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private maintenanceLogForm: MaintenanceLogForm,
    public service: MaintenanceLogService,
    private modalService: ModalService,
    private route: ActivatedRoute,
    private router: Router,
    @Inject('COLUMNS') public elements: any,
  ) {}

  ngOnInit() {
    this.service.item$
      .pipe(takeUntil(this.destroy$))
      .subscribe((item: MaintenanceLog) => {
        if (!item) {
          this.form = this.maintenanceLogForm.generate(null);
        } else {
          this.form.patchValue(this.maintenanceLogForm.patch(item));
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  close() {
    this.modalService.close();
  }

  save(form: FormGroup) {
    this.service.save(this.maintenanceLogForm.values(form));
    this.close();
  }
}
