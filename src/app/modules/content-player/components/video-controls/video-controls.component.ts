import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Controls } from '../../models';

@Component({
  selector: 'app-video-controls',
  templateUrl: './video-controls.component.html',
})
export class VideoControlsComponent {
  @Input() controls: Controls = {};
  @Output() changeControls = new EventEmitter<Controls>();

  playPause(playing: any) {
    this.controls.playing = playing;
    this.changeControls.emit(this.controls);
  }

  changeVolume(volume: any) {
    this.controls.volume.volume = volume.volume;
    this.controls.volume.muted = volume.muted;
    this.changeControls.emit(this.controls);
  }

  setCaptions(captions: boolean) {
    this.controls.captions = captions;
    this.changeControls.emit(this.controls);
  }
}
