import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  Input,
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

@Component({
  selector: 'app-video-controls',
  templateUrl: './video-controls.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoControlsComponent {
  @Input() controls: Partial<Controls> = {};
  @Input() player: HTMLVideoElement;
  @Input() images: string[] = [];
  @Output() changeControls = new EventEmitter<Partial<Controls>>();

  constructor(@Inject(DOCUMENT) private document: Document) {}

  contentClicked: boolean = false;
  PlayContentClicked: boolean = false;
  VolumeContentClicked: boolean = false;

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
    value.value ? this.player.play() : this.player.pause();
    this.controls = {
      ...this.controls,
      playing: value.value as boolean,
    };
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
    this.player.currentTime = duration.currentTime;
    // This still needs some attention
    // need to tell the +- (5 or 10) seconds to display
    this.setDisplayOff();
  }

  changeVolume(value: ReturnValue) {
    const volume = <VolumeControls>value.value;
    if (value.display) {
      this.PlayContentClicked = false;
      this.VolumeContentClicked = true;
      this.contentClicked = true;
    }
    this.player.volume = volume.volume;
    this.player.muted = volume.muted;
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
      this.player.textTracks[0].mode = captions.captions ? 'showing' : 'hidden';
    }
    this.emit();
  }

  setSpeed(speed: number) {
    this.player.playbackRate = speed;
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
      ? this.player?.requestPictureInPicture()
      : this.document?.pictureInPictureEnabled !== null &&
        this.document?.pictureInPictureElement !== null &&
        this.document?.exitPictureInPicture();

    screen.full
      ? this.player?.requestFullscreen()
      : this.document?.fullscreenElement !== null &&
        this.document?.exitFullscreen();

    this.emit();
  }
}
