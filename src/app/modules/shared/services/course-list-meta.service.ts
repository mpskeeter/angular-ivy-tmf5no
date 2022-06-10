import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CrudService } from './crud.service';
import { Course, CourseListMeta } from '../../shared-types';
import { CourseService } from './course.service';

@Injectable({ providedIn: 'root' })
export class CourseListMetaService extends CrudService<CourseListMeta> {
  constructor(private courses: CourseService) {
    super();

    combineLatest([this.courses.items$])
      .pipe(
        map(([items]) => {
          const available: number = items?.length;
          const hours: number = items?.reduce(
            (sum, currentCourse) => sum + currentCourse.duration,
            0
          );
          const meta: CourseListMeta = {
            available,
            hours,
          };
          this.item.next(meta);
        })
      )
      .subscribe();
  }
}
