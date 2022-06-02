import { BaseName } from './base-name.interface';
import { Course } from './course.interface';
import { PlayList } from './play-list.interface';
import { Item } from './item.interface';
import { Source } from './source.interface';
import { User } from './user.interface';
import { Watched } from './watched.interface';

export interface Player extends BaseName {
  courseId?: number;
  playlistId?: number;
  playlistItemId?: number;
  sourceId?: number;
  watched: Partial<Watched>[];
  maxSequence: number;
  autoplay?: boolean;

  end?: boolean;

  course?: Partial<Course>;
  user?: Partial<User>;
  playlist?: Partial<PlayList>;
  playlistItem?: Partial<Item>;
  source?: Partial<Source>;
}
