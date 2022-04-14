import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { CourseRequestForm, CourseRequestService } from '../../../shared';

@Component({
  selector: 'app-course-request-form',
  templateUrl: './course-request-form.component.html',
})
export class CourseRequestFormComponent {
  form: FormGroup = this.courseRequestForm.generate();

  constructor(
    private service: CourseRequestService,
    private courseRequestForm: CourseRequestForm,
    @Inject('COURSE-REQUEST-COLUMNS') public elements: any,
    private router: Router,
  ) {}

  close() {
    this.router.navigate(['/']);
  }

  save(form: FormGroup) {
    this.service.save(this.courseRequestForm.values(form));
    this.close();
  }
}
