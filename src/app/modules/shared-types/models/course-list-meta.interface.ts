import { BaseName } from './base-name.interface';

export interface CourseListMeta extends BaseName {
  available?: number;
  duration?: number;
  hours?: number;
  tags?: number[];
}
