import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CourseRequest } from '../../../../shared-types';
import { CourseRequestForm, CourseRequestService } from '../../../../shared';
import { ModalService } from '../../../../modal';

@Component({
  selector: 'app-courses-requested-edit',
  templateUrl: './courses-requested-edit.component.html',
})
export class CoursesRequestedEditComponent implements OnInit, OnDestroy {
  form: FormGroup = this.courseRequestForm.generate();
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private courseRequestForm: CourseRequestForm,
    @Inject('COLUMNS') public elements: any,
    public service: CourseRequestService,
    private route: ActivatedRoute,
    private modalService: ModalService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.service.item$
      .pipe(takeUntil(this.destroy$))
      .subscribe((item: CourseRequest) => {
        if (!item) {
          this.form = this.courseRequestForm.generate(null);
        } else {
          this.form.patchValue(this.courseRequestForm.patch(item));
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
    this.service.save(this.courseRequestForm.values(form));
    this.close();
  }
}
