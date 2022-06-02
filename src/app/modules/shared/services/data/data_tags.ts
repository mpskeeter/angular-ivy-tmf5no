import { Tag } from '../../../shared-types';
import { getRawRawTag } from './data_tag';
import { getRawCourse } from './data_courses';

//#region RawTags
export const rawTags: Partial<Tag>[] = [
  {
    ...getRawRawTag(1),
    courses: [
      ...[1, 2, 5, 6, 7, 8, 9, 10].map((index: number) => getRawCourse(index)),
    ],
  },
  { ...getRawRawTag(2), courses: [] },
  { ...getRawRawTag(3), courses: [getRawCourse(3)] },
  { ...getRawRawTag(4), courses: [getRawCourse(4)] },
];

export const getRawTag = (tagId: number): Partial<Tag> =>
  rawTags.find((tag) => tag.id === tagId);
//#endregion
