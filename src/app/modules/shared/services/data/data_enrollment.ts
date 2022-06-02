import { Enrollment } from '../../../shared-types';
import { getRawCourse } from './data_course';
import { getRawRawUser } from './data_user';

//#region Enrollments
export const rawEnrollments: Partial<Enrollment>[] = [
  {
    id: 1,
    userId: 1,
    user: getRawRawUser(1),
    courseId: 1,
    course: getRawCourse(1),
    dateEnrolled: new Date('2022-02-01'),
    dateCompleted: null,
  },
  {
    id: 2,
    userId: 1,
    user: getRawRawUser(1),
    courseId: 2,
    course: getRawCourse(2),
    dateEnrolled: new Date('2022-02-01'),
    dateCompleted: null,
  },
  {
    id: 3,
    userId: 1,
    user: getRawRawUser(1),
    courseId: 3,
    course: getRawCourse(3),
    dateEnrolled: new Date('2022-02-01'),
    dateCompleted: null,
  },
  {
    id: 4,
    userId: 1,
    user: getRawRawUser(1),
    courseId: 4,
    course: getRawCourse(4),
    dateEnrolled: new Date('2022-02-01'),
    dateCompleted: null,
  },
  {
    id: 5,
    userId: 2,
    user: getRawRawUser(2),
    courseId: 1,
    course: getRawCourse(1),
    dateEnrolled: new Date('2022-02-01'),
    dateCompleted: null,
  },
  {
    id: 6,
    userId: 2,
    user: getRawRawUser(2),
    courseId: 2,
    course: getRawCourse(2),
    dateEnrolled: new Date('2022-02-01'),
    dateCompleted: null,
  },
  {
    id: 7,
    userId: 2,
    user: getRawRawUser(2),
    courseId: 3,
    course: getRawCourse(3),
    dateEnrolled: new Date('2022-02-01'),
    dateCompleted: null,
  },
  {
    id: 8,
    userId: 2,
    user: getRawRawUser(2),
    courseId: 4,
    course: getRawCourse(4),
    dateEnrolled: new Date('2022-02-01'),
    dateCompleted: null,
  },
  {
    id: 9,
    userId: 3,
    user: getRawRawUser(3),
    courseId: 1,
    course: getRawCourse(1),
    dateEnrolled: new Date('2022-02-01'),
    dateCompleted: null,
  },
  {
    id: 10,
    userId: 3,
    user: getRawRawUser(3),
    courseId: 2,
    course: getRawCourse(2),
    dateEnrolled: new Date('2022-02-01'),
    dateCompleted: null,
  },
  {
    id: 11,
    userId: 3,
    user: getRawRawUser(3),
    courseId: 3,
    course: getRawCourse(3),
    dateEnrolled: new Date('2022-02-01'),
    dateCompleted: null,
  },
  {
    id: 12,
    userId: 4,
    user: getRawRawUser(4),
    courseId: 4,
    course: getRawCourse(4),
    dateEnrolled: new Date('2022-02-01'),
    dateCompleted: null,
  },
];

export const getRawEnrollment = (enrollmentId: number): Partial<Enrollment> =>
  rawEnrollments.find(
    (enrollment: Partial<Enrollment>) => enrollment.id === enrollmentId
  );

export const getRawEnrollmentsForUser = (
  userId: number
): Partial<Enrollment>[] =>
  rawEnrollments.filter(
    (enrollment: Partial<Enrollment>) => enrollment.userId === userId
  );
//#endregion
