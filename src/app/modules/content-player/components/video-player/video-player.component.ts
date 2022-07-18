import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { fromEvent, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Captions, Controls, Screen, VideoDuration } from '../../models';
// import { GeneratePreviewService } from '../../services';
import { Player } from '../../../shared-types';
import { PlayerService } from '../../../shared';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
})
export class VideoPlayerComponent implements OnInit, OnDestroy, AfterViewInit {
  player: HTMLVideoElement;

  @ViewChild('video', { static: false })
  set video(el: ElementRef<HTMLVideoElement>) {
    if (el) {
      this.player = el.nativeElement as HTMLVideoElement;
    }
  }

  controls: Controls = {
    playing: true,
    volume: { volume: 1, muted: false },
    duration: { totalTime: 0, currentTime: 0, percent: 0 },
    captions: { disabled: true, captions: false },
    speed: 1.0,
    screen: { theater: false, full: false, mini: false },
  };

  item: Partial<Player> = {};

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    public playerService: PlayerService,
    // private generatePreview: GeneratePreviewService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    this.playerService.item$
      .pipe(
        map((item: Partial<Player>) => {
          this.item = item;
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngAfterViewInit() {
    fromEvent(this.player, 'loadeddata')
      .pipe(
        map((_) => {
          this.controls = {
            ...this.controls,
            duration: {
              currentTime: 0,
              percent: 0,
              totalTime: this.player.duration,
            },
            captions: {
              disabled: this.player.textTracks[0] === undefined,
              captions:
                this.player.textTracks[0] != undefined &&
                this.player.textTracks[0]?.mode !== 'hidden',
            },
          };

          if (this.item?.autoplay) this.player.play();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    // this.player.addEventListener('loadeddata', () => {
    //   this.controls = {
    //     ...this.controls,
    //     duration: {
    //       currentTime: 0,
    //       percent: 0,
    //       totalTime: this.player.duration,
    //     },
    //     captions: {
    //       disabled: this.player.textTracks[0] === undefined,
    //       captions:
    //         this.player.textTracks[0] != undefined &&
    //         this.player.textTracks[0]?.mode !== 'hidden',
    //     },
    //   };
    // });

    // Listen to timeupdate

    fromEvent(this.player, 'timeupdate')
      .pipe(
        map((_) => {
          const duration = this.controls.duration;
          this.controls = {
            ...this.controls,
            duration: {
              totalTime: this.player.duration,
              currentTime: this.player.currentTime,
              percent: this.player.currentTime / this.player.duration,
            },
          };
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    // this.player.addEventListener('timeupdate', () => {
    //   const duration = this.controls.duration;
    //   this.controls = {
    //     ...this.controls,
    //     duration: {
    //       totalTime: this.player.duration,
    //       currentTime: this.player.currentTime,
    //       percent: this.player.currentTime / this.player.duration,
    //     },
    //   };
    // });

    // Listen to enterpictureinpicture
    fromEvent(this.player, 'enterpictureinpicture')
      .pipe(
        map((_) => {
          this.controls = {
            ...this.controls,
            screen: {
              theater: false,
              full: false,
              mini: true,
            },
          };
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    // this.player.addEventListener('enterpictureinpicture', () => {
    //   this.controls = {
    //     ...this.controls,
    //     screen: {
    //       theater: false,
    //       full: false,
    //       mini: true,
    //     },
    //   };
    // });

    // Listen to leavepictureinpicture
    fromEvent(this.player, 'leavepictureinpicture')
      .pipe(
        map((_) => {
          this.controls = {
            ...this.controls,
            screen: {
              theater: false,
              full: false,
              mini: false,
            },
          };
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    // this.player.addEventListener('leavepictureinpicture', () => {
    //   this.controls = {
    //     ...this.controls,
    //     screen: {
    //       theater: false,
    //       full: false,
    //       mini: false,
    //     },
    //   };
    // });

    // Listen to fullscreenchange
    fromEvent(this.player, 'fullscreenchange')
      .pipe(
        map((_) => {
          this.controls = {
            ...this.controls,
            screen: {
              theater: false,
              full: !!this.document?.fullscreenElement,
              mini: false,
            },
          };
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    // this.player.addEventListener('fullscreenchange', () => {
    //   this.controls = {
    //     ...this.controls,
    //     screen: {
    //       theater: false,
    //       full: !!this.document?.fullscreenElement,
    //       mini: false,
    //     },
    //   };
    // });
  }

  onVideoEnded(item: Partial<Player>) {
    this.playerService.setWatched({
      userId: item?.user?.id,
      courseId: item?.course?.id,
      itemId: item?.playlistItem?.id,
      sourceId: item?.source?.id,
    });
    this.playerService.setSourceId(item?.source?.seq + 1);
  }

  setControls(controls: Controls) {
    this.controls = controls;
  }
}
