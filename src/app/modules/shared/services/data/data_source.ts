import { Source } from '../../../shared-types';

//#region Sources
export const rawSources: Partial<Source>[] = [
  {
    id: 1,
    name: 'Course Introduction',
    description:
      'Welcome to this course! Let me introduce myself and explain what the course is about!',
    url: 'https://vjs.zencdn.net/v/oceans.mp4',
    mimeType: 'application/mp4',
    duration: 46,
    createdAt: new Date('2021-04-04'),
    updatedAt: new Date('2021-04-04'),
    statusId: 1,
    authorId: 4,
  },
  {
    id: 2,
    name: 'Course Structure',
    description:
      "How is this course structured? This lecture answers the question and explains what you're going to learn!",
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    mimeType: 'application/mp4',
    duration: 60,
    createdAt: new Date('2021-04-04'),
    updatedAt: new Date('2021-04-04'),
    statusId: 1,
    authorId: 4,
  },
  {
    id: 3,
    name: 'Module Introduction',
    description:
      "Let me introduce you to the module and explain what you're going to learn.",
    // url: 'https://www.cdc.gov/coronavirus/2019-ncov/videos/partner-calls/2021.08.23_Partner-Update-Slides_FINAL.pptx',
    url: 'https://www.stonybrook.edu/commcms/studentaffairs/sac/_docs/_leadership/Public%20Speaking%20101.pptx',
    mimeType:
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    duration: 300,
    createdAt: new Date('2021-04-04'),
    updatedAt: new Date('2021-04-04'),
    statusId: 1,
    authorId: 4,
  },
  {
    id: 4,
    name: 'Project Introduction',
    description: 'Time to get started with the Course Project.',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    // url: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
    mimeType: 'application/mp4',
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
    mimeType: 'application/mp4',
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
    mimeType: 'application/mp4',
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
    mimeType: 'application/mp4',
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
    mimeType: 'application/mp4',
    duration: 15,
    createdAt: new Date('2021-04-04'),
    updatedAt: new Date('2021-04-04'),
    statusId: 1,
    authorId: 4,
  },
];

export const getRawSource = (itemId: number): Partial<Source> =>
  rawSources.find((item) => item.id === itemId);

export const buildSource = (sourceList: number[]): Partial<Source>[] =>
  sourceList.map((item, index) => ({
    ...getRawSource(item),
    seq: index + 1,
  }));
//#endregion
