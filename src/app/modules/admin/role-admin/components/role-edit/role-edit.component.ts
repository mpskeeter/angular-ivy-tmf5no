import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Role } from '../../../../shared-types';
import { RoleService, RoleForm } from '../../../../shared';
import { ModalService } from '../../../../modal';

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
})
export class RoleEditComponent implements OnInit, OnDestroy {
  form: FormGroup = this.roleForm.generate();
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private roleForm: RoleForm,
    public service: RoleService,
    private modalService: ModalService,
    private route: ActivatedRoute,
    private router: Router,
    @Inject('COLUMNS') public elements: any,
  ) {}

  ngOnInit() {
    this.service.item$
      .pipe(takeUntil(this.destroy$))
      .subscribe((item: Role) => {
        if (!item) {
          this.form = this.roleForm.generate(null);
        } else {
          this.form.patchValue(this.roleForm.patch(item));
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
    this.service.save(form.value);
    this.close();
  }
}
