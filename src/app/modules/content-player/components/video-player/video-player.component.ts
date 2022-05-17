import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Controls } from '../../models';
import { Player } from '../../../shared-types';
import { PlayerService } from '../../../shared';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
})
export class VideoPlayerComponent implements OnInit, OnDestroy, AfterViewInit {
  player: HTMLVideoElement;

  @ViewChild('video')
  set video(el: ElementRef) {
    this.player = el.nativeElement;
  }

  controls: Controls = {
    playing: true,
    volume: { volume: 1, muted: false },
    duration: { totalTime: 0, currentTime: 0, percent: 0 },
    captions: { display: false, captions: false },
    speed: 1.0,
  };

  captions: unknown;

  item: Partial<Player> = {};
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(public playerService: PlayerService) {}

  ngOnInit(): void {
    this.playerService.item$
      .pipe(takeUntil(this.destroy$))
      .subscribe((item: Partial<Player>) => {
        this.item = item;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngAfterViewInit() {
    // console.log('Values on ngAfterViewInit():');
    console.log('video:', this.player);

    this.player.addEventListener('loadeddata', () => {
      this.controls.duration.totalTime = this.player.duration;
    });

    this.player.addEventListener('timeupdate', () => {
      this.controls.duration.currentTime = this.player.currentTime;
      this.controls.duration.percent =
        this.player.currentTime / this.player.duration;
    });

    console.log('textTrack:', this.player.textTracks[0]);

    this.controls.captions = {
      display: this.player.textTracks[0] != undefined,
      captions:
        this.player.textTracks[0] != undefined &&
        this.player.textTracks[0]?.mode !== 'hidden',
    };
  }

  onVideoEnded() {
    this.playerService.setWatched({
      userId: this.item?.user?.id,
      courseId: this.item?.course?.id,
      itemId: this.item?.playlistItem?.id,
      sourceId: this.item?.source?.id,
    });
    this.playerService.setSourceId(this.item?.source?.id + 1);
  }

  changeControls(controls: Controls) {
    this.controls = controls;
    controls.playing ? this.player.play() : this.player.pause();
    this.player.volume = controls.volume.volume;
    this.player.muted = controls.volume.muted;
    if (controls.captions.display) {
      this.player.textTracks[0].mode = controls.captions.captions
        ? 'showing'
        : 'hidden';
    }
    this.player.playbackRate = controls.speed;
    this.controls = controls;
  }
}
