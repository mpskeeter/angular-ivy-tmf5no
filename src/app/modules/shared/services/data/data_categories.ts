import { Category } from '../../../shared-types';
import { getRawRawCategory } from './data_category';
import { getRawCourse } from './data_courses';

//#region RawCategory
export const rawCategory: Partial<Category>[] = [
  {
    ...getRawRawCategory(1),
    courses: [
      ...[1, 2, 5, 6, 7, 8, 9, 10, 4].map((index: number) =>
        getRawCourse(index)
      ),
    ],
  },
  { ...getRawRawCategory(2), courses: [getRawCourse(2)] },
  { ...getRawRawCategory(3), courses: [getRawCourse(3)] },
  { ...getRawRawCategory(4), courses: [getRawCourse(4)] },
];

export const getRawCategory = (categoryId: number): Partial<Category> =>
  rawCategory.find((category) => category.id === categoryId);

//#endregion
