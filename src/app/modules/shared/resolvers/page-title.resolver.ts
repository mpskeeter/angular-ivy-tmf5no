import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  NavigationEnd,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { Observable, of, forkJoin } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Category, Course } from '../../shared-types';
import { CategoryService, CourseService, TitleBarService } from '../services';

@Injectable({ providedIn: 'root' })
export class PageTitleResolver implements Resolve<{ any }> {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: TitleBarService,
    private categoryService: CategoryService,
    private courseService: CourseService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    // console.log({ route, activatedRoute: this.activatedRoute });
    this.titleService.setSkipHeader(route?.data['skipHeader'] || false);
    if (!route?.params?.id) {
      this.titleService.setTitle(route.data['title']);
    } else {
      const id = parseInt(route?.url[1]?.path, 10);
      switch (route?.url[0]?.path) {
        case 'category':
          if (id) {
            this.categoryService.get(id);
            this.categoryService.item$.subscribe((item: Partial<Category>) =>
              this.titleService.setTitle(`${item?.name} Courses`)
            );
          }
          break;

        case 'detail':
          if (id) {
            this.courseService.get(id);
            this.courseService.item$.subscribe((item: Partial<Course>) =>
              this.titleService.setTitle(`Course Detail (${item?.name})`)
            );
          }
          break;
      }
    }
    return of(null);
  }
}
