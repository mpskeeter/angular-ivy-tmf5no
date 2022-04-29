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
  destroy$ = new Subject<boolean>();

  play: Partial<Player> = {};

  constructor(
    public service: CourseService,
    public playerService: PlayerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    combineLatest([this.route.paramMap, this.route.queryParamMap])
      .pipe(
        map(([courseParam, sourceParam]) => {
          const courseId = parseInt(courseParam.get('id'), 10);
          const sourceId = parseInt(sourceParam.get('source'), 10);
          console.log('params:', { courseId, sourceId });
          return {
            courseId,
            sourceId,
          };
        }),
        takeUntil(this.destroy$)
      )
      .subscribe(({ courseId, sourceId }) => {
        this.service.get(courseId);
        this.playerService.setPlaylistSourceId(sourceId);
      });

    // this.route.paramMap
    //   .pipe(
    //     tap((params: ParamMap) => console.log('paramMap:', params)),
    //     map((params: ParamMap) => {
    //       const id = parseInt(params.get('id'), 10);
    //       if (id) this.service.get(id);
    //     })
    //   )
    //   .subscribe();

    // this.route.queryParamMap
    //   .pipe(
    //     tap((params: ParamMap) => console.log('queryParamMap:', params)),
    //     map((params: ParamMap) => {
    //       const id = parseInt(params.get('source'), 10);
    //       if (id) this.player.setPlaylistSourceId(id);
    //     })
    //   )
    //   .subscribe();

    // this.player.item$
    //   .pipe(
    //     tap((item: Partial<Player>) => console.log('tap:player:item:', item)),
    //     map((item: Partial<Player>) => (this.play = item)),
    //     tap((_) => console.log('tap:play:', this.play)),
    //     takeUntil(this.destroy$)
    //   )
    //   .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
