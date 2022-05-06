import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { combineLatest, of, Subject } from 'rxjs';
import { map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { CourseService, PlayerService } from '../../../shared';
import { Player } from '../../../shared-types';

@Component({
  selector: 'app-course-launch',
  templateUrl: './course-launch.component.html',
})
export class CourseLaunchComponent implements OnInit, OnDestroy {
  courseId: number = 0;
  sourceId: number = 0;

  destroy$ = new Subject<boolean>();

  constructor(
    public service: CourseService,
    public playerService: PlayerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.route.paramMap
    //   .pipe(
    //     map(
    //       (param: ParamMap) => (this.courseId = parseInt(param.get('id'), 10))
    //     )
    //   )
    //   .subscribe();

    // this.route.queryParamMap
    //   .pipe(
    //     map(
    //       (param: ParamMap) =>
    //         (this.sourceId = parseInt(param.get('source'), 10))
    //     )
    //   )
    //   .subscribe();

    combineLatest([this.route.paramMap, this.route.queryParamMap])
      .pipe(
        map(([courseParam, sourceParam]) => {
          this.courseId = parseInt(courseParam.get('id'), 10);
          this.sourceId = parseInt(sourceParam.get('source'), 10);

          console.log('params:', {
            courseId: this.courseId,
            sourceId: this.sourceId,
          });
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
