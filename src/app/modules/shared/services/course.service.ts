import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
  Course,
  CourseListMeta,
  Category,
  Tag,
  PlayListItem,
  PlayListSource,
} from '../../shared-types';
import { CrudService } from './crud.service';
import { rawCourses } from './rawData';

@Injectable({ providedIn: 'root' })
export class CourseService extends CrudService<Course> {
  _items = rawCourses;

  meta$: Observable<Partial<CourseListMeta>> = combineLatest([
    this.items$,
  ]).pipe(
    switchMap(([items]) => {
      const available: number = items?.length;
      const duration: number = items?.reduce(
        (sum, currentCourse) => sum + currentCourse.duration,
        0
      );
      const meta: CourseListMeta = {
        available,
        duration,
      };
      return of(meta);
    })
  );

  constructor() {
    super();
  }

  resequence(course: Partial<Course>): Partial<Course> {
    let newItemSeqNumber = 0;
    let newSourceSeqNumber = 0;
    const items: Partial<PlayListItem>[] = course?.playlist?.items?.map(
      (item: Partial<PlayListItem>) => {
        item.seq = ++newItemSeqNumber;
        item.sources = item.sources.map((source: Partial<PlayListSource>) => {
          source.seq = ++newSourceSeqNumber;
          return source;
        });

        return item;
      }
    );

    course.playlist.items = items;
    return course;
  }

  override get(id?: number): void {
    id > 0
      ? this.item.next(
          this.resequence(this._items.find((item) => item.id === id))
        )
      : this.items.next(this._items.map(this.resequence));
  }

  findCourse(courseId: number): Partial<Course> {
    return this._items.find(
      (course: Partial<Course>) => course.id === courseId
    );
  }

  getAllForTag(tagId: number) {
    const items = this._items.filter((item) =>
      item.tags.some((tag: Partial<Tag>) => tag.id === tagId)
    );
    this.items.next(items.sort(this.asc));
  }

  getAllForCategory(categoryId: number) {
    const items = this._items.filter((item) =>
      item.categories.some(
        (category: Partial<Category>) => category.id === categoryId
      )
    );
    this.items.next(items.sort(this.asc));
  }
}
