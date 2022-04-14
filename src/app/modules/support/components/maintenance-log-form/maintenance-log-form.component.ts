import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { MaintenanceLog, User } from '../../../shared-types';
import {
  AuthenticatedUserService,
  MaintenanceLogForm,
  MaintenanceLogService,
} from '../../../shared';

@Component({
  selector: 'app-maintenance-log-form',
  templateUrl: './maintenance-log-form.component.html',
})
export class MaintenanceLogFormComponent implements OnInit, OnDestroy {
  form: FormGroup = this.helpForm.generate();
  user: Partial<User> = {};

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private service: MaintenanceLogService,
    private helpForm: MaintenanceLogForm,
    private authenticatedUser: AuthenticatedUserService,
    @Inject('MAINTENANCE-LOG-COLUMNS') public elements: any,
    private router: Router,
  ) {
    this.authenticatedUser.item$
      .pipe(
        map((user: Partial<User>) => (this.user = user)),
        takeUntil(this.destroy$),
      )
      .subscribe();
  }

  ngOnInit() {
    // this.form = this.helpForm.generate();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  close() {
    this.router.navigate(['/']);
  }

  save(form: FormGroup) {
    let data: Partial<MaintenanceLog> = this.helpForm.values(form);
    data.submittedDate = new Date();
    data.submittedByName = this.user?.displayName;
    data.acceptedDate = null;
    this.service.save(data);
    this.router.navigate(['/']);
  }
}
