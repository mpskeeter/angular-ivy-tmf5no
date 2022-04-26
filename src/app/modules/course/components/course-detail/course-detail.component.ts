import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { AuthenticatedUserService, CourseService } from '../../../shared';
import { Course, Enrollment } from '../../../shared-types';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
})
export class CourseDetailComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();

  #currentEnrollment: BehaviorSubject<Partial<Enrollment>> =
    new BehaviorSubject<Partial<Enrollment>>(null);
  currentEnrollment$: Observable<Partial<Enrollment>> =
    this.#currentEnrollment.asObservable();

  constructor(
    public service: CourseService,
    public user: AuthenticatedUserService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if (id) {
        this.service.get(parseInt(id, 10));
      }
    });

    combineLatest([this.user.item$, this.service.item$])
      .pipe(
        map(([user, course]) => {
          let current: Partial<Enrollment> = user.enrollments.find(
            (enrollment) => enrollment.courseId === course.id
          );

          current = {
            ...(current
              ? current
              : {
                  courseId: course.id,
                  userId: user.id,
                }),
            currentlyEnrolled: current ? true : false,
          };
          this.#currentEnrollment.next(current);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  // TODO: Need to add a check to see if the user is enrolled in the course.
  launchCourse(currentEnrollment: Partial<Enrollment>) {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/course/launch', currentEnrollment.courseId])
    );
    const windowFeatures = 'popup,left=100,top=100,width=920,height=920';
    window.open(url, '_blank', windowFeatures);
  }

  unAssignCourse(enrollment: Partial<Enrollment>) {
    this.user.unenroll(enrollment);
  }

  assignCourse(enrollment: Partial<Enrollment>) {
    this.user.enroll(enrollment);
  }
}
