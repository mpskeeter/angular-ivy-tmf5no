import { MsPlayerComponent } from './ms-player';
import { VideoPlayerComponent } from './video-player';
import { VideoCaptionsComponent } from './video-captions';
import { VideoControlsComponent } from './video-controls';
import { VideoDurationComponent } from './video-duration';
import { VideoPlayPauseComponent } from './video-play-pause';
import { VideoScreenComponent } from './video-screen';
import { VideoSpeedComponent } from './video-speed';
import { VideoTheaterComponent } from './video-theater';
import { VideoVolumeComponent } from './video-volume';

export const ComponentsExport = [MsPlayerComponent, VideoPlayerComponent];

export const Components = [
  ...ComponentsExport,
  VideoCaptionsComponent,
  VideoControlsComponent,
  VideoDurationComponent,
  VideoPlayPauseComponent,
  VideoScreenComponent,
  VideoSpeedComponent,
  VideoTheaterComponent,
  VideoVolumeComponent,
];

export * from './ms-player';
export * from './video-player';
