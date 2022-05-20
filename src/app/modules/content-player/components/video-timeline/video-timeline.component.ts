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
  templateUrl: './video-timeline.component.html',
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
