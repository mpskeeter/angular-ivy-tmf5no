import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-player-controls',
  templateUrl: './video-player-controls.component.html',
})
export class VideoPlayerControlsComponent implements OnInit, OnDestroy {

  playing: boolean = true;

}