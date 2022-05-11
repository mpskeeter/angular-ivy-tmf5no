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
  };

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
    console.log('Values on ngAfterViewInit():');
    console.log('video:', this.player);
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
    controls.playing ? this.player.play() : this.player.pause();
  }
}
