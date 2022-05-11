import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-video-play-pause',
  templateUrl: './video-play-pause.component.html',
})
export class VideoPlayPauseComponent {
  @Input() playing: boolean = false;
  @Output() clicked = new EventEmitter<boolean>();

  buttonClick(playing: boolean) {
    this.playing = playing;
    this.clicked.emit(this.playing);
  }
}
