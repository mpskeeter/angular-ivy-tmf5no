import { MimeType } from '../../../shared-types';

//#region mimeTypes
export const mimeTypes: Partial<MimeType>[] = [
  {
    id: 1,
    ext: '.doc',
    name: 'application/msword',
    player:
      '../../content-player/components/video-player/video-player.component',
  },
  {
    id: 2,
    ext: '.docx',
    name: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    player: '../../content-player/components/ms-player/ms-player.component',
  },
  {
    id: 3,
    ext: '.avi',
    name: 'video/x-msvideo',
    player:
      '../../content-player/components/video-player/video-player.component',
  },
  {
    id: 4,
    ext: '.mp4',
    name: 'application/mp4',
    player:
      '../../content-player/components/video-player/video-player.component',
  },
  {
    id: 5,
    ext: '.mpeg',
    name: 'video/mpeg',
    player:
      '../../content-player/components/video-player/video-player.component',
  },
  {
    id: 6,
    ext: '.jpeg',
    name: 'image/jpeg',
  },
  {
    id: 7,
    ext: '.jpg',
    name: 'image/jpeg',
  },
  {
    id: 8,
    ext: '.pdf',
    name: 'application/pdf',
  },
  {
    id: 10,
    ext: '.ppt',
    name: 'application/vnd.ms-powerpoint',
    player: '../../content-player/components/ms-player/ms-player.component',
  },
  {
    id: 11,
    ext: '.pptx',
    name: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    player: '../../content-player/components/ms-player/ms-player.component',
  },
  {
    id: 12,
    ext: '.webm',
    name: 'video/webm',
    player:
      '../../content-player/components/video-player/video-player.component',
  },
  {
    id: 13,
    ext: '.xls',
    name: 'application/vnd.ms-excel',
    player: '../../content-player/components/ms-player/ms-player.component',
  },
  {
    id: 14,
    ext: '.xlsx',
    name: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    player: '../../content-player/components/ms-player/ms-player.component',
  },
];
//#endregion
