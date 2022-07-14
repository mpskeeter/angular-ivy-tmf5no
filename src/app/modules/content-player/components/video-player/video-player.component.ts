import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { Captions, Controls, Screen, VideoDuration } from '../../models';
// import { GeneratePreviewService } from '../../services';
import { Player } from '../../../shared-types';
import { PlayerService } from '../../../shared';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
})
export class VideoPlayerComponent implements OnInit, AfterViewInit {
  player: HTMLVideoElement;

  #player: BehaviorSubject<HTMLVideoElement> =
    new BehaviorSubject<HTMLVideoElement>(null);
  player$: Observable<HTMLVideoElement> = this.#player.asObservable();

  images: string[] = [];
  @ViewChild('video', { static: false, read: ElementRef })
  set video(el: ElementRef<HTMLVideoElement>) {
    if (el) {
      this.player = el.nativeElement as HTMLVideoElement;
      this.#player.next(this.player);
    }
  }

  controls: Controls = {};

  constructor(
    public playerService: PlayerService,
    // private generatePreview: GeneratePreviewService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.controls = {
      playing: true,
      volume: { volume: 1, muted: false },
      duration: { totalTime: 0, currentTime: 0, percent: 0 },
      captions: { disabled: true, captions: false },
      speed: 1.0,
      screen: { theater: false, full: false, mini: false },
    };
  }

  ngAfterViewInit() {
    // If player is active
    // Start listening to events
    if (this.player) {
      // Listen to loadeddata
      this.player.addEventListener('loadeddata', () => {
        this.controls = {
          ...this.controls,
          duration: {
            currentTime: 0,
            percent: 0,
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

      // Listen to timeupdate
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

      // Listen to enterpictureinpicture
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

      // Listen to leavepictureinpicture
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

      // Listen to fullscreenchange
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
