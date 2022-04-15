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
import { Category } from '../../shared-types';
import { CategoryService, TitleBarService } from '../services';

@Injectable({ providedIn: 'root' })
export class PageTitleResolver implements Resolve<{ any }> {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: TitleBarService,
    private categoryService: CategoryService,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<any> {
    // console.log({ route, activatedRoute: this.activatedRoute });
    this.titleService.setSkipHeader(route?.data?.skipHeader || false);
    if (!route?.params?.id) {
      this.titleService.setTitle(route.data.title);
    } else {
      if (route?.url[0]?.path === 'category') {
        const categoryId = parseInt(route?.url[1]?.path, 10);
        if (categoryId) {
          this.categoryService.get(categoryId);
          this.categoryService.item$.subscribe((category: Partial<Category>) =>
            this.titleService.setTitle(`${category.name} Courses`),
          );
        }
      }
    }
    return of(null);
  }
}
