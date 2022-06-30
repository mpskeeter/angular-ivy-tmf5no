import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  Input,
  Output,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Captions, Controls, Screen, VideoDuration } from '../../models';

@Component({
  selector: 'app-video-controls',
  templateUrl: './video-controls.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoControlsComponent implements AfterViewInit {
  @Input() controls: Partial<Controls> = {};
  @Input() player: HTMLVideoElement;
  @Output() changeControls = new EventEmitter<Partial<Controls>>();

  constructor(@Inject(DOCUMENT) private document: Document) {}

  contentClicked: boolean = false;

  ngAfterViewInit() {
    // this.player.addEventListener('loadeddata', () => {
    //   this.controls.duration.totalTime = this.player.duration;
    // });

    this.player.addEventListener('timeupdate', () => {
      this.controls.duration.totalTime = this.player.duration;
      this.controls.duration.currentTime = this.player.currentTime;
      this.controls.duration.percent =
        this.controls.duration.currentTime / this.controls.duration.totalTime;
    });

    this.player.addEventListener('enterpictureinpicture', () => {
      this.controls.screen.mini = true;
    });

    this.player.addEventListener('leavepictureinpicture', () => {
      this.controls.screen.mini = false;
    });

    this.player.addEventListener('fullscreenchange', () => {
      this.controls.screen.full = !!this.document?.fullscreenElement;
    });

    this.controls.captions = {
      disabled: this.player.textTracks[0] == undefined,
      captions:
        this.player.textTracks[0] != undefined &&
        this.player.textTracks[0]?.mode !== 'hidden',
    };
  }

  emit() {
    this.changeControls.emit(this.controls);
  }

  contentPlayPause(playing: boolean) {
    this.contentClicked = true;
    this.playPause(playing);
    setTimeout(() => {
      this.contentClicked = false;
    }, 1000);
  }

  playPause(playing: any) {
    this.controls.playing = playing;
    this.controls.playing ? this.player.play() : this.player.pause();
  }

  setDuration(duration: Partial<VideoDuration>) {
    this.controls.duration = duration;
    this.player.currentTime = this.controls.duration.currentTime;
  }

  changeVolume(volume: any) {
    this.controls.volume = volume;
    this.player.volume = this.controls.volume.volume;
    this.player.muted = this.controls.volume.muted;
  }

  setCaptions(captions: Partial<Captions>) {
    this.controls.captions = captions;
    if (!this.controls.captions.disabled) {
      this.player.textTracks[0].mode = this.controls.captions.captions
        ? 'showing'
        : 'hidden';
    }
  }

  setSpeed(speed: number) {
    this.controls.speed = speed;
    this.player.playbackRate = this.controls.speed;
  }

  setScreen(screen: Partial<Screen>) {
    this.controls.screen = screen;

    this.controls.screen.mini
      ? this.player?.requestPictureInPicture()
      : this.document?.pictureInPictureEnabled !== null &&
        this.document?.pictureInPictureElement !== null &&
        this.document?.exitPictureInPicture();

    this.controls.screen.full
      ? this.player?.requestFullscreen()
      : this.document?.fullscreenElement !== null &&
        this.document?.exitFullscreen();
  }
}
