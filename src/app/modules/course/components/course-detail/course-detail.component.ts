import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CourseService } from '../../../shared';
import { Course } from '../../../shared-types';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
})
export class CourseDetailComponent implements OnInit {
  constructor(
    public service: CourseService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if (id) {
        this.service.get(parseInt(id, 10));
      }
    });
  }

  // TODO: Need to add a check to see if the user is enrolled in the course.
  launch(course: Partial<Course>) {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/course/launch', course.id]),
    );
    const windowFeatures = 'popup,left=100,top=100,width=920,height=920';
    window.open(url, '_blank', windowFeatures);
  }
}
