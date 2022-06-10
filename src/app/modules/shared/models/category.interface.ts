import { Course } from './course.interface';
import { BaseName } from './base-name.interface';

export interface Category extends BaseName {
  description?: string;
  image?: string;

  courses?: Partial<Course>[];
}
