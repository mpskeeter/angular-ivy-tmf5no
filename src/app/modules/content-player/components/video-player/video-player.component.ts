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
// import { Observable, of, Subject } from 'rxjs';
// import { takeUntil } from 'rxjs/operators';
import { Captions, Controls, Screen, VideoDuration } from '../../models';
import { GeneratePreviewService } from '../../services';
import { Player } from '../../../shared-types';
import { PlayerService } from '../../../shared';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
})
export class VideoPlayerComponent implements OnInit, OnDestroy, AfterViewInit {
  player: HTMLVideoElement;
  images: string[] = [];
  @ViewChild('video') set video(el: ElementRef) { this.player = el.nativeElement; }

  controls: Controls = {};
  // destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    public playerService: PlayerService,
    // private generatePreview: GeneratePreviewService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.controls = {
      playing: true,
      volume: { volume: 1, muted: false },
      duration: { totalTime: 0, currentTime: 0, percent: 0, images: [] },
      captions: { disabled: true, captions: false },
      speed: 1.0,
      screen: { theater: false, full: false, mini: false },
    };

    // this.playerService.item$
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((item: Partial<Player>) => {
    //     if (item?.source?.previewImages) {
    //       this.controls = {
    //         ...this.controls,
    //         duration: {
    //           ...this.controls.duration,
    //           images: item?.source?.previewImages || [],
    //         },
    //       };
    //     }
    //   });
  }

  // ngOnDestroy(): void {
  //   this.destroy$.next(true);
  //   this.destroy$.complete();
  // }

  ngAfterViewInit() {
    this.player.addEventListener('loadeddata', () => {
      this.controls = {
        ...this.controls,
        duration: {
          ...this.controls.duration,
          totalTime: this.player.duration,
        },
        captions: {
          disabled: this.player.textTracks[0] == undefined,
          captions:
            this.player.textTracks[0] != undefined &&
            this.player.textTracks[0]?.mode !== 'hidden',
        },
      };
    });

    this.player.addEventListener('timeupdate', () => {
      const duration = this.controls.duration;
      this.controls = {
        ...this.controls,
        duration: {
          totalTime: this.player.duration,
          currentTime: this.player.currentTime,
          percent: this.player.currentTime / this.player.duration,
        },
      };
    });

    this.player.addEventListener('enterpictureinpicture', () => {
      this.controls = {
        ...this.controls,
        screen: {
          theater: false,
          full: false,
          mini: true,
        },
      };
    });

    this.player.addEventListener('leavepictureinpicture', () => {
      this.controls = {
        ...this.controls,
        screen: {
          theater: false,
          full: false,
          mini: false,
        },
      };
    });

    this.player.addEventListener('fullscreenchange', () => {
      this.controls = {
        ...this.controls,
        screen: {
          theater: false,
          full: !!this.document?.fullscreenElement,
          mini: false,
        },
      };
    });
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

  // changeVolume(volume: any) {
  //   this.controls = {
  //     ...this.controls,
  //     volume,
  //   }
  //   this.player.volume = volume.volume;
  //   this.player.muted = volume.muted;
  // }

  setControls(controls: Controls) {
    this.controls = controls;
  }

  // setCaptions(captions: Partial<Captions>) {
  //   this.controls = {
  //     ...this.controls,
  //     captions,
  //   };
  //   this.controls.captions = captions;
  //   if (!this.controls.captions.disabled) {
  //     this.player.textTracks[0].mode = captions.captions
  //       ? 'showing'
  //       : 'hidden';
  //   }
  // }

  // setSpeed(speed: number) {
  //   this.controls = {
  //     ...this.controls,
  //     speed,
  //   };
  //   this.player.playbackRate = speed;
  // }

  // setScreen(screen: Partial<Screen>) {
  //   this.controls = {
  //     ...this.controls,
  //     screen,
  //   };

  //   screen.mini
  //     ? this.player?.requestPictureInPicture()
  //     : this.document?.pictureInPictureEnabled !== null &&
  //       this.document?.pictureInPictureElement !== null &&
  //       this.document?.exitPictureInPicture();

  //   screen.full
  //     ? this.player?.requestFullscreen()
  //     : this.document?.fullscreenElement !== null &&
  //       this.document?.exitFullscreen();
  // }
}
