import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import {
  distinctUntilChanged,
  map,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs/operators';
import {
  AuthenticatedUserService,
  CourseService,
  PlayerService,
} from '../../../shared';
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

  enrollments: Partial<Enrollment>[] = [];

  constructor(
    public service: CourseService,
    public user: AuthenticatedUserService,
    public activatedRoute: ActivatedRoute,
    private player: PlayerService,
    public router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap
      .pipe(
        distinctUntilChanged(),
        tap((params: ParamMap) =>
          this.service.get(parseInt(params.get('id'), 10))
        )
      )
      .subscribe();

    combineLatest([this.user.item$, this.service.item$])
      .pipe(
        map(([user, course]) => {
          if (this.enrollments !== user.enrollments) {
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
            this.enrollments = user.enrollments;
          }
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
  launchCourse(courseId: number, sourceSeq: number) {
    this.player.setSourceId(sourceSeq);
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/course/launch', courseId], {
        queryParams: { source: sourceSeq },
      })
    );
    const windowFeatures = 'popup,left=100,top=100,width=920,height=920';
    window.open(url, '_play', windowFeatures);
  }

  unAssignCourse(enrollment: Partial<Enrollment>) {
    this.user.unenroll(enrollment);
  }

  assignCourse(enrollment: Partial<Enrollment>) {
    this.user.enroll(enrollment);
  }
}
