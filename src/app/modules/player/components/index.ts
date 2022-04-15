import { PlayComponent } from './play';
import { PlayerComponent } from './player';
import { PlayerChapterComponent } from './player-chapter';
import { PlayerSourceComponent } from './player-source';
import { PlayerItemComponent } from './player-item';
import { PlayerMetaComponent } from './player-meta';
import { WatchedComponent } from './watched';

export const ComponentsExport = [PlayerComponent];

export const Components = [
  ...ComponentsExport,
  PlayComponent,
  PlayerChapterComponent,
  PlayerSourceComponent,
  PlayerItemComponent,
  PlayerMetaComponent,
  WatchedComponent,
];

export * from './player';
export * from './player-item';
export * from './player-chapter';
export * from './player-source';
export * from './player-meta';
