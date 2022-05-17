import { MsPlayerComponent } from './ms-player';
import { VideoPlayerComponent } from './video-player';
import { VideoControlsComponent } from './video-controls';
import { VideoDurationComponent } from './video-duration';
import { VideoPlayPauseComponent } from './video-play-pause';
import { VideoVolumeComponent } from './video-volume';

export const ComponentsExport = [MsPlayerComponent, VideoPlayerComponent];

export const Components = [
  ...ComponentsExport,
  VideoControlsComponent,
  VideoDurationComponent,
  VideoPlayPauseComponent,
  VideoVolumeComponent,
];

export * from './ms-player';
export * from './video-player';
