import { MsPlayerComponent } from './ms-player';
import { VideoPlayerComponent } from './video-player';
import { VideoPlayerControlsComponent } from './video-player-controls';
import { VideoPlayerPlayPauseComponent } from './video-player-play-pause';

export const ComponentsExport = [MsPlayerComponent, VideoPlayerComponent];

export const Components = [...ComponentsExport, VideoPlayerControlsComponent, VideoPlayerPlayPauseComponent];

export * from './ms-player';
export * from './video-player';
