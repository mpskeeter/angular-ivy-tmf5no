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
      (mousedown)="mouseMove($event)"
      (mouseup)="mouseMove($event)"
    >
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
          after:absolute after:left-0 after:top-0 after:bottom-0 after:bg-red-700
        "
        ngClass="{{ before }} {{ after }}"
      >
        <img class="preview-img" />
        <div class="thumb-indicator"></div>
      </div>
    </div>
  `
})
export class VideoTimelineComponent {
  @Input() duration: Partial<VideoDuration> = {};
  @Output() clicked: EventEmitter<Partial<VideoDuration>> = new EventEmitter<
    Partial<VideoDuration>
  >();

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

  get side() {
    const percentage = 100 - this.duration.percent * 100;
    return 'right-[' + percentage.toString() + '%]';
  }

  get before() {
    return 'before:' + this.side;
  }

  get after() {
    return 'after:' + this.side;
  }

  skip(duration) {
    this.duration.currentTime += duration;
    this.clicked.emit(this.duration);
  }

  mouseMove(event: MouseEvent) {
    var target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();

    const percent =
      Math.min(Math.max(0, event.x - rect.x), rect.width) / rect.width;

    this.duration.percent = percent;
    this.duration.currentTime = this.duration.totalTime * percent;
    this.clicked.emit(this.duration);
  }
}
