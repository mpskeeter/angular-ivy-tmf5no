import { Course } from '../../../shared-types';
import { getRawRawCategory } from './data_category';
import { getRawRawCourse } from './data_course';
import { getRawPlayList } from './data_playlists';
import { getRawRawTag } from './data_tag';

//#region RawCourses
const buildPlaylist = (playlistId: number) => ({
  playlistId,
  playlist: getRawPlayList(playlistId),
  duration: getRawPlayList(playlistId)?.duration,
});

export const rawCourses: Partial<Course>[] = [
  {
    ...getRawRawCourse(1),
    categories: [getRawRawCategory(1)],
    tags: [getRawRawTag(1)],
    ...buildPlaylist(1),
  },
  {
    ...getRawRawCourse(2),
    categories: [getRawRawCategory(1), getRawRawCategory(2)],
    tags: [getRawRawTag(1)],
    ...buildPlaylist(2),
  },
  {
    ...getRawRawCourse(3),
    categories: [getRawRawCategory(3)],
    tags: [getRawRawTag(3)],
    ...buildPlaylist(2),
  },
  {
    ...getRawRawCourse(4),
    categories: [getRawRawCategory(4)],
    tags: [getRawRawTag(4)],
    ...buildPlaylist(3),
  },
  {
    ...getRawRawCourse(5),
    categories: [getRawRawCategory(1)],
    tags: [getRawRawTag(1)],
    ...buildPlaylist(1),
  },
  {
    ...getRawRawCourse(6),
    categories: [getRawRawCategory(1)],
    tags: [getRawRawTag(1)],
    ...buildPlaylist(1),
  },
  {
    ...getRawRawCourse(7),
    categories: [getRawRawCategory(1)],
    tags: [getRawRawTag(1)],
    ...buildPlaylist(1),
  },
  {
    ...getRawRawCourse(8),
    categories: [getRawRawCategory(1)],
    tags: [getRawRawTag(1)],
    ...buildPlaylist(1),
  },
  {
    ...getRawRawCourse(9),
    categories: [getRawRawCategory(1)],
    tags: [getRawRawTag(1)],
    ...buildPlaylist(1),
  },
  {
    ...getRawRawCourse(10),
    categories: [getRawRawCategory(1)],
    tags: [getRawRawTag(1)],
    ...buildPlaylist(1),
  },
];

export const getRawCourse = (courseId: number): Partial<Course> =>
  rawCourses.find((course) => course.id === courseId);
//#endregion
