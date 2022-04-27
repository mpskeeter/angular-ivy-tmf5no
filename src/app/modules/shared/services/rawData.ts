import {
  Category,
  Course,
  Enrollment,
  PlayList,
  PlayListItem,
  PlayListSource,
  Role,
  Status,
  Tag,
  User,
} from '../../shared-types';

//#region RawCategory
export const rawRawCategory: Partial<Category>[] = [
  {
    id: 1,
    name: 'Developer',
    description: 'No…we\'re not teaching you how to become a Software Developer.  However, these courses will give you knowledge of our standards and workflows.',
    image:
      'https://s3.envato.com/files/3c53ef5b-f3d4-49e0-82bd-376915ff94b6/inline_image_preview.jpg',
  },
  {
    id: 2,
    name: 'System Admin',
    description: 'These courses will allow the team member to become more familiar with our standards and workflows.',
    image:
      'https://i1.wp.com/jobs365.co.za/wp-content/uploads/2019/07/SYSTEM-ADMINISTRATOR.jpg?fit=1200%2C798&ssl=1',
  },
  {
    id: 3,
    name: 'Network Admin',
    description: 'These courses will allow the team member to become more familiar with our standards and workflows.',
    image:
      'https://www.earnmydegree.com/sites/all/files/public/images/shutterstock_329986208.jpg',
  },
  {
    id: 4,
    name: 'Site Lead',
    description: 'These courses will allow the team member to become more familiar with our standards and workflows.',
    image:
      'https://heritageofficesuites.com/wp-content/uploads/2017/05/Meeting-Room-Image-19.jpg',
  },
];

export const getRawRawCategory = (
  categoryId: number
): Partial<Category> =>
  rawRawCategory.find((category) => category.id === categoryId);
//#endregion

//#region RawStatus
export const rawStatus: Partial<Status>[] = [
  {
    id: 1,
    name: 'Active',
  },
  {
    id: 2,
    name: 'Inactive',
  },
  {
    id: 3,
    name: 'Working',
  },
];

export const getRawStatus = (statusId: number): Partial<Status> =>
  rawStatus.find((status) => status.id === statusId);
//#endregion

//#region RawTags
export const rawRawTags: Partial<Tag>[] = [
  {
    id: 1,
    name: 'Developer',
    image:
      'https://s3.envato.com/files/3c53ef5b-f3d4-49e0-82bd-376915ff94b6/inline_image_preview.jpg',
  },
  {
    id: 2,
    name: 'System Admin',
    image:
      'https://i1.wp.com/jobs365.co.za/wp-content/uploads/2019/07/SYSTEM-ADMINISTRATOR.jpg?fit=1200%2C798&ssl=1',
  },
  {
    id: 3,
    name: 'Network Admin',
    image:
      'https://www.earnmydegree.com/sites/all/files/public/images/shutterstock_329986208.jpg',
  },
  {
    id: 4,
    name: 'Site Lead',
    image:
      'https://heritageofficesuites.com/wp-content/uploads/2017/05/Meeting-Room-Image-19.jpg',
  },
];

export const getRawRawTag = (tagId: number): Partial<Tag> =>
  rawRawTags.find((tag) => tag.id === tagId);
//#endregion

//#region Roles
export const rawRoles: Partial<Role>[] = [
  { id: 1, name: 'user' },
  { id: 2, name: 'author' },
  { id: 3, name: 'manager' },
  { id: 4, name: 'admin' },
];

export const getRawRole = (roleId: number): Partial<Role> =>
  rawRoles.find((role) => role.id === roleId);
//#endregion

//#region RawCourses
export const rawRawCourses: Partial<Course>[] = [
  {
    id: 1,
    name: 'Angular',
    subject: 'Subject 1',
    image: 'https://angular.io/assets/images/logos/angular/angular.svg',
    description: "The modern web developer's platform",
    statusId: 1,
    provider: 'Google',
    datePublished: new Date('2014-11-01'),
    dateUpdated: new Date('2016-12-22'),
    rating: 4.73,
    status: getRawStatus(1),
    // tags: [getRawTag(1)],
  },
  {
    id: 2,
    name: 'Typescript',
    subject: 'Subject 2',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
    description: 'The modern javascript language',
    statusId: 2,
    provider: 'Udemy',
    datePublished: new Date('2017-02-01'),
    dateUpdated: new Date('2019-12-10'),
    rating: 4.9,
    status: getRawStatus(1),
    // tags: [getRawTag(1)],
  },
  {
    id: 3,
    name: 'Business Intelligence',
    subject: 'Subject 3',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/8/8e/Business-Intelligence-800x493.jpg',
    description:
      'Develop a data mindset and the analytical skills to interpret and communicate data while applying concepts to real business...',
    statusId: 1,
    provider: 'Harvard University',
    datePublished: new Date('2018-04-04'),
    dateUpdated: new Date('2020-12-10'),
    rating: 4.1,
    status: getRawStatus(1),
    // tags: [getRawTag(3)],
  },
  {
    id: 4,
    name: 'Open-Source Intelligence (OSINT) Gathering and Analysis',
    subject: 'Subject 4',
    image: 'https://www.maltego.com/images/uploads/teaser-osint.png',
    description:
      'This course goes from scratch to advanced; it covers the most critical aspect of OSINT (open-source intelligence). The OSINT plays a vital role in the ethical hacking/ Penetration testing process; hence this program is equally essential for intelligence officers, ethical hackers, marketers, HR, and cybersecurity professionals.',
    statusId: 3,
    provider: 'Udemy',
    datePublished: new Date('2021-04-04'),
    dateUpdated: new Date('2021-04-04'),
    rating: 3.9,
    status: getRawStatus(1),
    // tags: [getRawTag(4)],
  },
];

export const getRawRawCourse = (courseId: number): Partial<Course> =>
  rawRawCourses.find((course) => course.id === courseId);
//#endregion

//#region Users
export const rawRawUsers: Partial<User>[] = [
  {
    id: 1,
    name: 'John Doe',
    displayName: 'John Doe',
    firstName: 'John',
    lastName: 'Doe',
    emailAddress: 'johndoe@sample.com',
    // picture: 'https://randomuser.me/api/portraits/men/21.jpg',
    roles: [getRawRole(1)],
    color: '#3670b2',
    status: 'online',
    settings: {
      autoPlay: true,
    },
  },
  {
    id: 2,
    name: 'Jane Smith',
    displayName: 'Jane Smith',
    firstName: 'Jane',
    lastName: 'Smith',
    emailAddress: 'janesmith@sample.com',
    picture: 'https://randomuser.me/api/portraits/women/6.jpg',
    roles: [getRawRole(1)],
    color: '#468547',
    status: 'offline',
    settings: {
      autoPlay: true,
    },
  },
  {
    id: 3,
    name: 'Jim Johnson',
    displayName: 'Jim Johnson',
    firstName: 'Jim',
    lastName: 'Johnson',
    emailAddress: 'jimdoe@sample.com',
    // picture: 'https://randomuser.me/api/portraits/men/21.jpg',
    roles: [getRawRole(1)],
    color: '#3670b2',
    settings: {
      autoPlay: true,
    },
  },
  {
    id: 4,
    name: 'Timothy Smith',
    displayName: 'Timothy Smith',
    firstName: 'Timothy',
    lastName: 'smith',
    emailAddress: 'timsmith@sample.com',
    // picture: 'https://randomuser.me/api/portraits/men/21.jpg',
    roles: [getRawRole(1), getRawRole(4)],
    color: '#3670b2',
    settings: {
      autoPlay: true,
    },
  },
];

export const getRawRawUser = (userId: number): Partial<User> =>
  rawRawUsers.find((user) => user.id === userId);
//#endregion

//#region PlayListSources
export const rawPlayListSources: Partial<PlayListSource>[] = [
  {
    id: 1,
    name: 'Ocean feeding frenzy',
    url: 'https://vjs.zencdn.net/v/oceans.mp4',
    mimeType: 'video/mp4',
    duration: 46,
    createdAt: new Date('2021-04-04'),
    updatedAt: new Date('2021-04-04'),
    statusId: 1,
    authorId: 4,
  },
  {
    id: 2,
    name: 'Chromecast commercial: For bigger fun',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    mimeType: 'video/mp4',
    duration: 60,
    createdAt: new Date('2021-04-04'),
    updatedAt: new Date('2021-04-04'),
    statusId: 1,
    authorId: 4,
  },
  {
    id: 3,
    name: 'CDC Slides',
    url: 'https://www.cdc.gov/coronavirus/2019-ncov/videos/partner-calls/2021.08.23_Partner-Update-Slides_FINAL.pptx',
    mimeType: 'application/mspowerpoint',
    duration: 300,
    createdAt: new Date('2021-04-04'),
    updatedAt: new Date('2021-04-04'),
    statusId: 1,
    authorId: 4,
  },
  {
    id: 4,
    name: 'Big buck bunny short film',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    mimeType: 'video/mp4',
    duration: 596,
    createdAt: new Date('2021-04-04'),
    updatedAt: new Date('2021-04-04'),
    statusId: 1,
    authorId: 4,
  },
  {
    id: 5,
    name: 'Elephants dream short film',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    mimeType: 'video/mp4',
    duration: 653,
    createdAt: new Date('2021-04-04'),
    updatedAt: new Date('2021-04-04'),
    statusId: 1,
    authorId: 4,
  },
  {
    id: 6,
    name: 'Chromecast commercial: For bigger blazes',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    mimeType: 'video/mp4',
    duration: 15,
    createdAt: new Date('2021-04-04'),
    updatedAt: new Date('2021-04-04'),
    statusId: 1,
    authorId: 4,
  },
  {
    id: 7,
    name: 'Chromecast commercial: For bigger escapes',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    mimeType: 'video/mp4',
    duration: 15,
    createdAt: new Date('2021-04-04'),
    updatedAt: new Date('2021-04-04'),
    statusId: 1,
    authorId: 4,
  },
  {
    id: 8,
    name: 'Chromecast commercial: For bigger joy rides',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    mimeType: 'video/mp4',
    duration: 15,
    createdAt: new Date('2021-04-04'),
    updatedAt: new Date('2021-04-04'),
    statusId: 1,
    authorId: 4,
  },
];

export const getRawPlayListSource = (itemId: number): Partial<PlayListSource> =>
  rawPlayListSources.find((item) => item.id === itemId);

const getRawRawPlayListSource = (sourceItem) =>
  getRawPlayListSource(sourceItem);
//#endregion

//#region PlayListItems
const sumSources = (sourceIds: number[]): number => {
  let sum: number = 0;
  sourceIds.map(
    (sourceItem) => (sum += getRawRawPlayListSource(sourceItem)?.duration)
  );
  return sum;
};

// findItemsForSource(item: Partial<PlayListItem>, sourceId: number) {
//   return item.sources.some(source => source.id === sourceId)
// }
export const rawPlayListItems: Partial<PlayListItem>[] = [
  {
    id: 1,
    name: 'Ocean feeding frenzy',
    authorId: 4,
    author: getRawRawUser(4),
    statusId: 1,
    duration: sumSources([1, 2]),
    sources: [1, 2].map((sourceItem, index) => ({
      ...getRawRawPlayListSource(sourceItem),
      seq: index + 1,
    })),
    watched: true,
  },
  {
    id: 2,
    name: 'Other than Video',
    authorId: 4,
    author: getRawRawUser(4),
    statusId: 1,
    duration: sumSources([3]),
    sources: [3].map((sourceItem, index) => ({
      ...getRawRawPlayListSource(sourceItem),
      seq: index + 1,
    })),
    watched: true,
  },
  {
    id: 3,
    name: 'Big buck bunny short film',
    authorId: 4,
    author: getRawRawUser(4),
    statusId: 1,
    duration: sumSources([4]),
    sources: [4].map((sourceItem, index) => ({
      ...getRawRawPlayListSource(sourceItem),
      seq: index + 1,
    })),
    watched: true,
  },
  {
    id: 4,
    name: 'Elephants dream short film',
    authorId: 4,
    author: getRawRawUser(4),
    statusId: 1,
    duration: sumSources([5]),
    sources: [5].map((sourceItem, index) => ({
      ...getRawRawPlayListSource(sourceItem),
      seq: index + 1,
    })),
    watched: false,
  },
  {
    id: 5,
    name: 'Chromecast commercial: For bigger blazes',
    authorId: 4,
    author: getRawRawUser(4),
    statusId: 1,
    duration: sumSources([6]),
    sources: [6].map((sourceItem, index) => ({
      ...getRawRawPlayListSource(sourceItem),
      seq: index + 1,
    })),
    watched: false,
  },
  {
    id: 6,
    name: 'Chromecast commercial: For bigger escapes',
    authorId: 4,
    author: getRawRawUser(4),
    statusId: 1,
    duration: sumSources([7]),
    sources: [7].map((sourceItem, index) => ({
      ...getRawRawPlayListSource(sourceItem),
      seq: index + 1,
    })),
    watched: false,
  },
  {
    id: 7,
    name: 'Chromecast commercial: For bigger fun',
    authorId: 4,
    author: getRawRawUser(4),
    statusId: 1,
    duration: sumSources([2]),
    sources: [2].map((sourceItem, index) => ({
      ...getRawRawPlayListSource(sourceItem),
      seq: index + 1,
    })),
    watched: false,
  },
  {
    id: 8,
    name: 'Chromecast commercial: For bigger joy rides',
    authorId: 4,
    author: getRawRawUser(4),
    statusId: 1,
    duration: sumSources([8]),
    sources: [8].map((sourceItem, index) => ({
      ...getRawRawPlayListSource(sourceItem),
      seq: index + 1,
    })),
    watched: false,
  },
  {
    id: 9,
    name: 'Chromecast commercial: For bigger browsers',
    authorId: 3,
    author: getRawRawUser(3),
    statusId: 1,
    duration: sumSources([2]),
    sources: [2].map((sourceItem, index) => ({
      ...getRawRawPlayListSource(sourceItem),
      seq: index + 1,
    })),
    watched: false,
  },
  {
    id: 10,
    name: 'Chromecast commercial: For bigger browsers',
    authorId: 4,
    author: getRawRawUser(4),
    statusId: 1,
    duration: sumSources([2]),
    sources: [2].map((sourceItem, index) => ({
      ...getRawRawPlayListSource(sourceItem),
      seq: index + 1,
    })),
    watched: false,
  },
  {
    id: 11,
    name: 'Chromecast commercial: For bigger browsers',
    authorId: 4,
    author: getRawRawUser(4),
    statusId: 1,
    duration: sumSources([2]),
    sources: [2].map((sourceItem, index) => ({
      ...getRawRawPlayListSource(sourceItem),
      seq: index + 1,
    })),
    watched: false,
  },
  {
    id: 12,
    name: 'Chromecast commercial: For bigger browsers',
    authorId: 4,
    author: getRawRawUser(4),
    statusId: 1,
    duration: sumSources([2]),
    sources: [2].map((sourceItem, index) => ({
      ...getRawRawPlayListSource(sourceItem),
      seq: index + 1,
    })),
    watched: false,
  },
];

export const getRawPlayListItem = (itemId: number): Partial<PlayListItem> =>
  rawPlayListItems.find((item) => item.id === itemId);

// export const rawPlayListSources: Partial<PlayListSource>[] =
//   rawRawPlayListSources.map((source: Partial<PlayListSource>) => ({
//     ...source,
//     items: rawPlayListItems.map((item: Partial<PlayListItem>) => item.some(findItemitem)
//       item.sources.some(
//         (itemSource: Partial<PlayListSource>) => itemSource.id === source.id
//       )
//     ),
//   }));
//#endregion

//#region PlayLists
// updated 2022-02-14
const sumItems = (itemIds: number[]): number => {
  let sum: number = 0;
  itemIds.map((sourceItem) => {
    sum += getRawPlayListItem(sourceItem)?.duration;
  });
  return sum;
};

export const rawPlayLists: Partial<PlayList>[] = [
  {
    id: 1,
    name: 'Demo 1',
    description: 'Demo 1',
    duration: sumItems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    statusId: 1,
    createdAt: new Date('2021-04-04'),
    updatedAt: new Date('2021-04-04'),
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
      (item: number, index: number) => ({
        ...getRawPlayListItem(item),
        seq: index + 1,
      })
    ),
  },
  {
    id: 2,
    name: 'MyDevLMS',
    description: 'MyDevLMS',
    duration: sumItems([1, 2, 3]),
    statusId: 1,
    createdAt: new Date('2021-04-04'),
    updatedAt: new Date('2021-04-04'),
    items: [1, 2, 3].map((item: number, index: number) => ({
      ...getRawPlayListItem(item),
      seq: index + 1,
    })),
  },
  {
    id: 3,
    name: 'Site Lead',
    description: 'Site Lead',
    duration: sumItems([5, 7, 2]),
    statusId: 1,
    createdAt: new Date('2021-04-04'),
    updatedAt: new Date('2021-04-04'),
    items: [5, 7, 2].map((item: number, index: number) => ({
      ...getRawPlayListItem(item),
      seq: index + 1,
    })),
  },
];

export const getRawPlayList = (playListId: number): Partial<PlayList> =>
  rawPlayLists.find(
    (playlist: Partial<PlayList>) => playlist.id === playListId
  );
//#endregion

//#region Courses
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
];

export const getRawCourse = (courseId: number): Partial<Course> =>
  rawCourses.find((course) => course.id === courseId);
//#endregion

//#region Tags
export const rawTags: Partial<Tag>[] = [
  { ...getRawRawTag(1), courses: [getRawCourse(1), getRawCourse(2)] },
  { ...getRawRawTag(2), courses: [] },
  { ...getRawRawTag(3), courses: [getRawCourse(3)] },
  { ...getRawRawTag(4), courses: [getRawCourse(4)] },
];

export const getRawTag = (tagId: number): Partial<Tag> =>
  rawTags.find((tag) => tag.id === tagId);
//#endregion

//#region Category
export const rawCategory: Partial<Category>[] = [
  {
    ...getRawRawCategory(1),
    courses: [getRawCourse(1), getRawCourse(2)],
  },
  { ...getRawRawCategory(2), courses: [getRawCourse(2)] },
  { ...getRawRawCategory(3), courses: [getRawCourse(3)] },
  { ...getRawRawCategory(4), courses: [getRawCourse(4)] },
];

export const getRawCategory = (
  categoryId: number
): Partial<Category> =>
  rawCategory.find((category) => category.id === categoryId);
//#endregion

//#region Enrollments
// const enroll = [
//   {
//     userId: 1,
//     courses: [1, 2, 3, 4],
//   },
//   {
//     userId: 2,
//     courses: [1, 2, 3, 4],
//   },
//   {
//     userId: 3,
//     courses: [1, 2, 3],
//   },
//   {
//     userId: 4,
//     courses: [4],
//   },
// ];

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

//#region rawUsers
export const rawUsers: Partial<User>[] = [
  ...[1, 2, 3, 4].map((index: number) => ({
    ...rawRawUsers.find((user) => user.id === index),
    enrollments: rawEnrollments.filter(
      (enrollment) => enrollment.userId === index
    ),
  })),
];

export const getRawUser = (userId: number): Partial<User> =>
  rawUsers.find((user: Partial<User>) => user.id === userId);
//#endregion
