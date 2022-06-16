import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { CourseCategory } from '../../shared-types';
import { CourseService } from './course.service';
import { rawCourseCategory } from './data';

@Injectable({ providedIn: 'root' })
export class CourseCategoryService extends CrudService<CourseCategory> {
  _items = rawCourseCategory;
  
  constructor(private courseService: CourseService) {
    super();
  }

  buildCourseCategory(
    record: Partial<CourseCategory>
  ): Partial<CourseCategory> {
    const courseCategory: Partial<CourseCategory> = {
      ...record,
      course: this.courseService.getRawCourseById(record.courseId),
    };

    return courseCategory;
  }

  getForCategory(categoryId: number) {
    return this._items
      .filter(
        (record: Partial<CourseCategory>) => record.categoryId === categoryId
      )
      .map((record: Partial<CourseCategory>) =>
        this.buildCourseCategory(record)
      );
  }

  override get(id?: number): void {
    id > 0
      ? this.item.next(
          this.buildCourseCategory(this._items.find((item) => item.id === id))
        )
      :
        this.items.next(
          this._items.map((courseCategory: Partial<CourseCategory>) =>
            this.buildCourseCategory(courseCategory)
          )
        );
  }
}
