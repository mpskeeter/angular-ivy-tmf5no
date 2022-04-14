import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CourseRequest } from '../../../../shared-types';
import { CourseRequestForm, CourseRequestService } from '../../../../shared';

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
    private router: Router,
  ) {}

  ngOnInit() {
    this.courseRequestForm.parseRoute(this.route);

    this.courseRequestForm.id$
      .pipe(takeUntil(this.destroy$))
      .subscribe((id: number) =>
        id ? this.service.get(id) : this.service.blank(),
      );

    this.service.item$
      .pipe(takeUntil(this.destroy$))
      .subscribe((item: CourseRequest) =>
        this.form.patchValue(this.courseRequestForm.patch(item)),
      );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  close() {
    this.router.navigate(['/admin/courses-requested/list']);
  }

  save(form: FormGroup) {
    this.service.save(this.courseRequestForm.values(form));
    this.close();
  }
}
