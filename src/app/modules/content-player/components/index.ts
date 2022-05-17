import { MsPlayerComponent } from './ms-player';
import { VideoPlayerComponent } from './video-player';
import { VideoCaptionsComponent } from './video-captions';
import { VideoControlsComponent } from './video-controls';
import { VideoDurationComponent } from './video-duration';
import { VideoPlayPauseComponent } from './video-play-pause';
import { VideoSpeedComponent } from './video-speed';
import { VideoVolumeComponent } from './video-volume';

export const ComponentsExport = [MsPlayerComponent, VideoPlayerComponent];

export const Components = [
  ...ComponentsExport,
  VideoCaptionsComponent,
  VideoControlsComponent,
  VideoDurationComponent,
  VideoPlayPauseComponent,
  VideoSpeedComponent,
  VideoVolumeComponent,
];

export * from './ms-player';
export * from './video-player';
