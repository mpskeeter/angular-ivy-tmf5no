import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
  Course,
  CourseListMeta,
  Category,
  Tag,
  Item,
  Source,
} from '../../shared-types';
import { CrudService } from './crud.service';
import { PlayListService } from './play-list.service';
// import { rawCourses } from './rawData';
import { rawRawCourses } from './rawData';

@Injectable({ providedIn: 'root' })
export class CourseService extends CrudService<Course> {
  // _items = rawCourses;
  _items = rawRawCourses;

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

  constructor(private playListService: PlayListService) {
    super();
  }

  resequence(course: Partial<Course>): Partial<Course> {
    let newItemSeqNumber = 0;
    let newSourceSeqNumber = 0;
    const items: Partial<Item>[] = course?.playlist?.items?.map(
      (item: Partial<Item>) => {
        item.seq = ++newItemSeqNumber;
        item.sources = item.sources.map((source: Partial<Source>) => {
          source.seq = ++newSourceSeqNumber;
          return source;
        });

        return item;
      }
    );

    course.playlist.items = items;
    return course;
  }

  buildCourse(record: Partial<Course>): Partial<Course> {
    const playlist = this.playListService.getById(record.playlistId);
    const course: Partial<Course> = {
      ...record,
      duration: playlist.duration, 
      playlist,
    };

    return course;
  }

  override get(id?: number): void {
    id > 0
      ? this.item.next(
          // this.resequence(this._items.find((item) => item.id === id))
          this.buildCourse(this._items.find((item) => item.id === id))
        )
      // : this.items.next(this._items.map(this.resequence));
      : this.items.next(this._items.map((course: Partial<Course>) => this.buildCourse(course)));
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
