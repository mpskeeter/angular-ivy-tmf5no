import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ReturnValue, VideoDuration } from '../../models';

@Component({
  selector: 'app-video-timeline',
  templateUrl: './video-timeline.component.html',
  styleUrls: ['./video-timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoTimelineComponent {
  @Input() duration: Partial<VideoDuration> = {};
  @Input() playing: boolean = false;
  @Input() images: string[] = [];
  @Output() clicked: EventEmitter<ReturnValue> =
    new EventEmitter<ReturnValue>();
  @Output() playingChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  isScrubbing: boolean = false;
  preview: HTMLImageElement;
  previewImgNumber: number = -1;

  previewPosition: number = 0;
  progressPosition: number = this.duration.percent;
  wasPaused: boolean = !this.playing;

  @ViewChild('container', {static:false}) container: ElementRef;

  @HostListener('mousedown', ['$event'])
  mousedown($event: MouseEvent) {
    this.toggleScrubbing($event);
  }

  @HostListener('mousemove', ['$event'])
  mousemove($event: MouseEvent) {
    this.handleTimelineUpdate($event);
  }

  @HostListener('mouseup', ['$event'])
  mouseup($event: MouseEvent) {
    this.handleTimelineUpdate($event);
    if (this.isScrubbing) this.toggleScrubbing($event);
  }

  //#region skipping
  // Handle skipping +5 or -5 seconds
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key.toLowerCase()) {
      case 'arrowleft':
        this.skip(-5);
        break;
      case 'arrowright':
        this.skip(5);
        break;
      case 'j':
        this.skip(-10);
        break;
      case 'l':
        this.skip(10);
        break;
    }
  }

  skip(duration) {
    this.duration.currentTime += duration;
    this.duration.percent = this.duration.currentTime / this.duration.totalTime;
    this.clicked.emit({ display: true, value: this.duration });
  }
  //#endregion skipping

  constructor(public domSanitizer: DomSanitizer) {}

  getPercent(event: MouseEvent): number {
    const rect = (
      this.container.nativeElement as HTMLElement
    ).getBoundingClientRect();
    return Math.min(Math.max(0, event.x - rect.x), rect.width) / rect.width;
  }

  toggleScrubbing(event: MouseEvent) {
    this.setPosition(this.getPercent(event));

    this.isScrubbing = (event.buttons & 1) === 1;

    if (this.isScrubbing) {
      this.wasPaused = !this.playing;
      this.setPlaying(false);
    } else {
      if (!this.wasPaused) {
        this.setPlaying(true);
      }
    }

    this.handleTimelineUpdate(event);
  }

  handleTimelineUpdate(event: MouseEvent) {
    const percent = this.getPercent(event);
    this.previewPosition = percent;
    if (this.images.length > 0) {
      this.previewImgNumber =
        Math.max(1, Math.floor(this.duration.totalTime * percent)) + 1;
    }

    if (this.isScrubbing) {
      event.preventDefault();
      this.setPosition(percent);
    }
  }

  setPlaying(playing: boolean) {
    this.playing = playing;
    this.playingChange.emit(this.playing);
  }

  setPosition(percent): void {
    this.duration.currentTime = this.duration.totalTime * percent;
    this.duration.percent = this.duration.currentTime / this.duration.totalTime;
    this.clicked.emit({ display: false, value: this.duration });
  }
}
