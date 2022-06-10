import { BaseName } from './base-name.interface';
import { Course } from './course.interface';

export interface Tag extends BaseName {
  description?: string;
  image?: string;

  courses?: Partial<Course>[];
}
