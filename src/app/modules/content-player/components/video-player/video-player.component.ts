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
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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

  contentClicked: boolean = false;
  previewImages: string[] = [];

  @ViewChild('video')
  set video(el: ElementRef) {
    this.player = el.nativeElement;
  }

  controls: Controls = {};
  // controls: Controls = {
  //   playing: true,
  //   volume: { volume: 1, muted: false },
  //   duration: { totalTime: 0, currentTime: 0, percent: 0 },
  //   captions: { disabled: true, captions: false },
  //   speed: 1.0,
  //   screen: { theater: false, full: false, mini: false },
  // };

  // captions: unknown;

  // item: Partial<Player> = {};
  destroy$: Subject<boolean> = new Subject<boolean>();

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

    this.playerService.item$
      .pipe(takeUntil(this.destroy$))
      .subscribe((item: Partial<Player>) => {
        this.previewImages = item?.source?.previewImages;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngAfterViewInit() {
    // const loadPreview = async () => {
    //   console.log(
    //     'loadPreview:this.controls.duration.images:',
    //     this.controls.duration.images
    //   );
    //   if (this.controls.duration.images.length === 0) {
    //     this.controls.duration.images =
    //       await this.generatePreview.generateVideoThumbnails(
    //         this.player.src as unknown as File,
    //         Math.floor(this.player.duration),
    //         'url'
    //       );

    //     console.log(
    //       'loadPreview:this.controls.duration.images:',
    //       this.controls.duration.images
    //     );
    //   }
    // };
    this.player.addEventListener('loadeddata', () => {
      // loadPreview();
      // console.log('video.src:', this.player.src);
      this.controls.duration.totalTime = this.player.duration;
      if (this.previewImages?.length > 0) {
        this.controls.duration.images = this.previewImages;
      }
      console.log(
        'loadeddata:this.controls.duration.images:',
        this.controls.duration.images
      );
      // if (this.controls.duration.images === []) {
      //   this.controls.duration.images =
      //     await this.generatePreview.generateVideoThumbnails(
      //       this.player.src as unknown as File,
      //       Math.floor(this.player.duration),
      //       'url'
      //     );
      // }
    });

    this.player.addEventListener('timeupdate', () => {
      // console.log('timeupdate:', this.player.currentTime);
      this.controls.duration.currentTime = this.player.currentTime;
      this.controls.duration.percent =
        this.controls.duration.currentTime / this.controls.duration.totalTime;
    });

    this.player.addEventListener('enterpictureinpicture', () => {
      this.controls.screen.mini = true;
    });

    this.player.addEventListener('leavepictureinpicture', () => {
      this.controls.screen.mini = false;
    });

    this.player.addEventListener('fullscreenchange', () => {
      this.controls.screen.full = !!this.document?.fullscreenElement;
    });

    this.controls.captions = {
      disabled: this.player.textTracks[0] == undefined,
      captions:
        this.player.textTracks[0] != undefined &&
        this.player.textTracks[0]?.mode !== 'hidden',
    };
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

  contentPlayPause(playing: boolean) {
    this.contentClicked = true;
    this.playPause(playing);
    setTimeout(() => {
      this.contentClicked = false;
    }, 1000);
  }

  playPause(playing: boolean) {
    this.controls.playing = playing;
    this.controls.playing ? this.player.play() : this.player.pause();
  }

  setDuration(duration: Partial<VideoDuration>) {
    this.controls.duration = duration;
    this.player.currentTime = this.controls.duration.currentTime;
  }

  changeVolume(volume: any) {
    this.controls.volume = volume;
    this.player.volume = this.controls.volume.volume;
    this.player.muted = this.controls.volume.muted;
  }

  setCaptions(captions: Partial<Captions>) {
    this.controls.captions = captions;
    if (!this.controls.captions.disabled) {
      this.player.textTracks[0].mode = this.controls.captions.captions
        ? 'showing'
        : 'hidden';
    }
  }

  setSpeed(speed: number) {
    this.controls.speed = speed;
    this.player.playbackRate = this.controls.speed;
  }

  setScreen(screen: Partial<Screen>) {
    this.controls.screen = screen;

    this.controls.screen.mini
      ? this.player?.requestPictureInPicture()
      : this.document?.pictureInPictureEnabled !== null &&
        this.document?.pictureInPictureElement !== null &&
        this.document?.exitPictureInPicture();

    this.controls.screen.full
      ? this.player?.requestFullscreen()
      : this.document?.fullscreenElement !== null &&
        this.document?.exitFullscreen();
  }
}
