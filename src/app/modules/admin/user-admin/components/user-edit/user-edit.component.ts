import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { User } from '../../../../shared-types';
import { UserForm, UserService } from '../../../../shared';
import { ModalService } from '../../../../modal';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
})
export class UserEditComponent implements OnInit, OnDestroy {
  form: FormGroup = this.userForm.generate();
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private userForm: UserForm,
    private service: UserService,
    private modalService: ModalService,
    private router: Router,
    @Inject('COLUMNS') public elements: any,
  ) {}

  ngOnInit() {
    this.service.item$
      .pipe(takeUntil(this.destroy$))
      .subscribe((item: User) => {
        if (!item) {
          this.form = this.userForm.generate(null);
        } else {
          this.form.patchValue(this.userForm.patch(item));
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
    this.service.save(this.userForm.values(form));
    this.close();
  }
}
