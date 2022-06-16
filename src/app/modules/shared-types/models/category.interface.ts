import { BaseName } from './base-name.interface';
import { Course } from './course.interface';
import { CourseCategory } from './course-category.interface';

export interface Category extends BaseName {
  description?: string;
  image?: string;

  courses?: Partial<Course>[];
  CourseCategories?: Partial<CourseCategory>[];
}
