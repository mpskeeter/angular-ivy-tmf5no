import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Host,
  Inject,
  Input,
  Optional,
  Output,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {
  Captions,
  Controls,
  ReturnValue,
  Screen,
  VideoDuration,
  VolumeControls,
} from '../../models';
import { VideoPlayerComponent } from '../video-player';

@Component({
  selector: 'app-video-controls',
  templateUrl: './video-controls.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoControlsComponent {
  @Input() controls: Partial<Controls> = {};
  @Input() images: string[] = [];
  @Output() changeControls = new EventEmitter<Partial<Controls>>();

  contentClicked: boolean = false;
  PlayContentClicked: boolean = false;
  VolumeContentClicked: boolean = false;

  constructor(
    @Optional() @Host() private parent: VideoPlayerComponent,
    @Inject(DOCUMENT) private document: Document
  ) {}

  emit() {
    this.changeControls.emit(this.controls);
  }

  setDisplayOff() {
    setTimeout(() => {
      this.PlayContentClicked = false;
      this.contentClicked = false;
    }, 2500);
    this.emit();
  }

  contentPlayPause() {
    this.contentClicked = true;
    setTimeout(() => {
      this.contentClicked = false;
    }, 2500);
  }

  playPause(value: ReturnValue) {
    if (value.display) {
      this.VolumeContentClicked = false;
      this.PlayContentClicked = true;
      this.contentClicked = true;
    }
    this.controls = {
      ...this.controls,
      playing: value.value as boolean,
    };
    (value.value as boolean)
      ? this.parent.player.play()
      : this.parent.player.pause();
    this.setDisplayOff();
  }

  setDuration(value: ReturnValue) {
    const duration: Partial<VideoDuration> =
      value.value as Partial<VideoDuration>;
    // This still needs some attention
    // need to tell the +- (5 or 10) seconds to display
    if (value.display) {
      this.VolumeContentClicked = false;
      this.PlayContentClicked = true;
      this.contentClicked = true;
    }
    this.controls = {
      ...this.controls,
      duration,
    };
    this.parent.player.currentTime = duration.currentTime;
    // This still needs some attention
    // need to tell the +- (5 or 10) seconds to display
    this.setDisplayOff();
  }

  changeVolume(value: ReturnValue) {
    const volume = value.value as Partial<VolumeControls>;
    if (value.display) {
      this.PlayContentClicked = false;
      this.VolumeContentClicked = true;
      this.contentClicked = true;
    }
    this.parent.player.volume = volume.volume;
    this.parent.player.muted = volume.muted;
    this.controls = {
      ...this.controls,
      volume,
    };
    this.setDisplayOff();
  }

  setCaptions(captions: Partial<Captions>) {
    this.controls = {
      ...this.controls,
      captions,
    };

    if (!captions.disabled) {
      this.parent.player.textTracks[0].mode = captions.captions
        ? 'showing'
        : 'hidden';
    }
    this.emit();
  }

  setSpeed(speed: number) {
    this.parent.player.playbackRate = speed;
    this.controls = {
      ...this.controls,
      speed,
    };
    this.emit();
  }

  setScreen(screen: Partial<Screen>) {
    this.controls = {
      ...this.controls,
      screen,
    };

    screen.mini
      ? this.parent.player?.requestPictureInPicture()
      : this.document?.pictureInPictureEnabled !== null &&
        this.document?.pictureInPictureElement !== null &&
        this.document?.exitPictureInPicture();

    screen.full
      ? this.parent.player?.requestFullscreen()
      : this.document?.fullscreenElement !== null &&
        this.document?.exitFullscreen();

    this.emit();
  }
}
