import { BaseName } from './base-name.interface';
import { Course, Item } from '../../shared-types';
import { User } from './user.interface';
import { PlayList } from './play-list.interface';
import { Source } from './play-list-source.interface';
import { Watched } from './watched.interface';

export interface Player extends BaseName {
  courseId?: number;
  userId?: number;
  playlistId?: number;
  playlistItemId?: number;
  sourceId?: number;
  watched: Partial<Watched>[];
  autoplay?: boolean;

  courseWatched?: boolean;

  course?: Partial<Course>;
  user?: Partial<User>;
  playlist?: Partial<PlayList>;
  playlistItems?: Partial<Item>[];
  playlistItem?: Partial<Item>;
  source?: Partial<Source>;
}
