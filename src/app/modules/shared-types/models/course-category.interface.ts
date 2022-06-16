import { BaseId } from './base-id.interface;'
import { Category } from './category.interface';
import { Course } from './course.interface';

export interface CourseCategory extends BaseId {
  courseId?: number;
  categoryId?: number;

  course?: Partial<Course>;
  category?: Partial<Category>;
}
