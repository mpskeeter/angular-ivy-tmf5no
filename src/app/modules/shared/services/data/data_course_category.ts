import { CourseCategory } from '../../../shared-types';

//#region CourseCategory
export const rawCourseCategory: Partial<CourseCategory>[] = [
  [1, 1],
  [1, 2],
  [1, 5],
  [1, 6],
  [1, 7],
  [1, 8],
  [1, 9],
  [1, 10],
  [1, 4],
  [2, 2],
  [3, 3],
  [4, 4],
].map((working, index: number) => {
  const categoryId = working[0];
  const courseId = working[1];
  const item: Partial<CourseCategory> = {
    id: index + 1,
    categoryId,
    courseId,
  };
  return item;
});

export const getRawCourseCategory = (
  courseCategoryId: number
): Partial<CourseCategory> =>
  rawCourseCategory.find(
    (courseCategory) => courseCategory.id === courseCategoryId
  );
//#endregion
