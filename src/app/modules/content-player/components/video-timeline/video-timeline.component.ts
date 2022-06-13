import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { VideoDuration } from '../../models';

@Component({
  selector: 'app-video-timeline',
  template: `
    <div
      class="timeline-container flex items-center h-2 cursor-pointer mx-2"
      >
    <!-- (mouseup)="mouseUp($event)" -->
    <!-- (mousedown)="toggleScrubbing($event)" -->
    <!-- (mousemove)="handleTimelineUpdate($event)" -->
    <div
        class="
          timeline
          relative
          bg-[#646464]
          h-1
          w-full
          before:absolute
          before:left-0
          before:top-0;
          before:bottom-0
          before:bg-[#969696]
          before:hidden
          {{ before }}
          after:absolute after:left-0 after:top-0 after:bottom-0 after:bg-red-700
          {{ after }}
        "
        [ngClass]="{'before:block h-full': isScrubbing}"
        >
        <!-- ngClass="{{ before }} {{ after }}" -->
        <img class="preview-img" />
        <div class="thumb-indicator"></div>
      </div>
    </div>
  `,
})
export class VideoTimelineComponent {
  @Input() duration: Partial<VideoDuration> = {};
  @Input() playing: boolean = false;
  @Output() clicked: EventEmitter<Partial<VideoDuration>> = new EventEmitter<
    Partial<VideoDuration>
  >();
  @Output() playingChange: EventEmitter<boolean> = new EventEmitter<boolean>();

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
    this.clicked.emit(this.duration);
    if (this.isScrubbing) this.toggleScrubbing($event);
  }

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

  isScrubbing: boolean = false;
  wasPaused: boolean = !this.playing;

  get percentage() {
    return 100 - this.duration.percent * 100;
  }

  get side() {
    return 'right-[' + this.percentage.toString() + '%]';
  }

  get before() {
    return 'before:' + this.side;
  }

  get after() {
    return 'after:' + this.side;
  }

  getPercent(event: MouseEvent) {
    var target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();

    this.duration.percent =
      Math.min(Math.max(0, event.x - rect.x), rect.width) / rect.width;

    this.duration.currentTime = this.duration.totalTime * this.duration.percent;
  }

  skip(duration) {
    this.duration.currentTime += duration;
    this.clicked.emit(this.duration);
  }

  toggleScrubbing(event: MouseEvent) {
    this.getPercent(event);
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
    if (this.isScrubbing) {
      this.getPercent(event);
      event.preventDefault();
      this.clicked.emit(this.duration);
    }
  }
}
