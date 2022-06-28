import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VideoDuration } from '../../models';

@Component({
  selector: 'app-video-timeline',
  templateUrl: './video-timeline.component.html',
  styleUrls: ['./video-timeline.component.scss'],
})
export class VideoTimelineComponent {
  @Input() duration: Partial<VideoDuration> = {};
  @Input() playing: boolean = false;
  @Output() clicked: EventEmitter<Partial<VideoDuration>> = new EventEmitter<
    Partial<VideoDuration>
  >();
  @Output() playingChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  preview: HTMLImageElement;
  previewImgNumber: number = -1;

  previewPosition: number = 0;
  progressPosition: number = this.duration.percent;
  isScrubbing: boolean = false;
  wasPaused: boolean = !this.playing;

  // @ViewChild('previewImage')
  // set previewImage(el: ElementRef) {
  //   this.preview = el.nativeElement;
  // }

  get thumbIndicator() {
    return 'left-[' + (this.duration.percent * 100).toString() + '%]';
  }

  get right() {
    return 'right-[' + (100 - this.duration.percent * 100).toString() + '%]';
  }

  get before() {
    return 'before:' + this.right;
  }

  get after() {
    return 'after:' + this.right;
  }

  @ViewChild('container') container: ElementRef;

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
      case 'j':
        this.skip(-5);
        break;
      case 'arrowright':
      case 'l':
        this.skip(5);
        break;
    }
  }

  skip(duration) {
    this.duration.currentTime += duration;
    this.duration.percent = this.duration.currentTime / this.duration.totalTime;
    this.clicked.emit(this.duration);
  }
  //#endregion skipping

  // constructor(public domSanitizer: DomSanitizer) {}

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
      this.playing = false;
      this.playingChange.emit(this.playing);
    } else {
      if (!this.wasPaused) {
        this.playing = true;
        this.playingChange.emit(this.playing);
      }
    }

    this.handleTimelineUpdate(event);
  }

  handleTimelineUpdate(event: MouseEvent) {
    const percent = this.getPercent(event);
    this.previewPosition = percent;
    if (this.duration.images != []) {
      this.previewImgNumber = Math.max(
        1,
        Math.floor(this.duration.totalTime * percent)
      );
    }

    if (this.isScrubbing) {
      this.progressPosition = percent;
      event.preventDefault();
      // this.playingChange.emit(false);
      this.setPosition(percent);
      // this.playingChange.emit(true);
    }
  }

  setPlaying(playing: boolean) {
    this.playing = playing;
    this.playingChange.emit(this.playing);
  }

  setPosition(percent): void {
    this.duration.currentTime = this.duration.totalTime * percent;
    this.duration.percent = this.duration.currentTime / this.duration.totalTime;
    this.clicked.emit(this.duration);
  }
}
