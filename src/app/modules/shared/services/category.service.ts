import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { CourseCategoryService } from './course-category.service';
import { rawCategory } from './rawData';
import { Category, CourseCategory } from '../../shared-types';

@Injectable({ providedIn: 'root' })
export class CategoryService extends CrudService<Category> {
  _items = rawCategory;

  constructor(private courseCategoryService: CourseCategoryService) {
    super();
  }

  buildCategory(record: Partial<Category>): Partial<Category> {
    const courseCategories = this.courseCategoryService.getForCategory(
      record.id
    );
    const category: Partial<Category> = {
      ...record,
      courses: courseCategories.map(
        (record: Partial<CourseCategory>) => record.course
      ),
      CourseCategories: courseCategories,
    };

    return category;
  }

  getById(categoryId: number): Partial<Category> {
    return this._items.find(
      (record: Partial<Category>) => record.id === categoryId
    );
  }

  override get(id?: number): void {
    id > 0
      ? this.item.next(
          // this.resequence(this._items.find((item) => item.id === id))
          this.buildCategory(this._items.find((item) => item.id === id))
        )
      : // : this.items.next(this._items.map(this.resequence));
        this.items.next(
          this._items.map((category: Partial<Category>) =>
            this.buildCategory(category)
          )
        );
  }
}
