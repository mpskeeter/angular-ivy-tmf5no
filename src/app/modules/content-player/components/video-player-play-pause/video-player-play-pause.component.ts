import { Component, OnDestroy, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-player-play-pause',
  templateUrl: './video-player-play-pause.component.html',
})
export class VideoPlayerPlayPauseComponent implements OnInit, OnDestroy {
  @Input() playing: boolean = false;
}