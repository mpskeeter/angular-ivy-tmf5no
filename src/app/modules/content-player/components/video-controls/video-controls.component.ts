import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Captions, Controls, Screen, VideoDuration } from '../../models';

@Component({
  selector: 'app-video-controls',
  templateUrl: './video-controls.component.html',
})
export class VideoControlsComponent {
  @Input() controls: Partial<Controls> = {};
  @Output() changeControls = new EventEmitter<Partial<Controls>>();

  emit() {
    this.changeControls.emit(this.controls);
  }

  playPause(playing: any) {
    this.controls.playing = playing;
    this.emit();
  }

  setDuration(duration: Partial<VideoDuration>) {
    this.controls.duration = duration;
    this.emit();
  }

  changeVolume(volume: any) {
    this.controls.volume = volume;
    this.emit();
  }

  setCaptions(captions: Partial<Captions>) {
    this.controls.captions = captions;
    this.emit();
  }

  setSpeed(speed: number) {
    this.controls.speed = speed;
    this.emit();
  }

  setScreen(screen: Partial<Screen>) {
    this.controls.screen = screen;
    this.emit();
  }
}
