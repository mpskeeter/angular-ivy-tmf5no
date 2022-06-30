import { MsPlayerComponent } from './ms-player';
import { VideoIconPauseComponent } from './video-icon-pause';
import { VideoIconPlayComponent } from './video-icon-play';
import { VideoPlayerComponent } from './video-player';
import { VideoCaptionsComponent } from './video-captions';
import { VideoControlsComponent } from './video-controls';
import { VideoDurationComponent } from './video-duration';
import { VideoFullComponent } from './video-full';
import { VideoPlayPauseComponent } from './video-play-pause';
import { VideoScreenComponent } from './video-screen';
import { VideoSpeedComponent } from './video-speed';
import { VideoTheaterComponent } from './video-theater';
import { VideoTimelineComponent } from './video-timeline';
import { VideoVolumeComponent } from './video-volume';

export const ComponentsExport = [MsPlayerComponent, VideoPlayerComponent];

export const Components = [
  ...ComponentsExport,
  VideoIconPauseComponent,
  VideoIconPlayComponent,
  VideoCaptionsComponent,
  VideoControlsComponent,
  VideoDurationComponent,
  VideoFullComponent,
  VideoPlayPauseComponent,
  VideoScreenComponent,
  VideoSpeedComponent,
  VideoTheaterComponent,
  VideoTimelineComponent,
  VideoVolumeComponent,
];

export * from './ms-player';
export * from './video-player';
