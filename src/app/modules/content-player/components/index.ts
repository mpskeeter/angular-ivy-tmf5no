import { MsPlayerComponent } from './ms-player';
import { VideoPlayerComponent } from './video-player';
import { VideoControlsComponent } from './video-controls';
import { VideoPlayPauseComponent } from './video-play-pause';

export const ComponentsExport = [MsPlayerComponent, VideoPlayerComponent];

export const Components = [
  ...ComponentsExport,
  VideoControlsComponent,
  VideoPlayPauseComponent,
];

export * from './ms-player';
export * from './video-player';
