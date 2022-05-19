import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { VideoDuration, Screen } from '../../models';

@Component({
  selector: 'app-video-timeline',
  templateUrl: './video-timeline.component.html',
})
export class VideoTimelineComponent {
  @Input() duration: Partial<VideoDuration> = {};
  @Output() clicked: EventEmitter<Partial<VideoDuration>> = new EventEmitter<
    Partial<VideoDuration>
  >();

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

  percent: number;
  rightSide: string;
  beforeRightSide: string;
  afterRightSide: string;

  setEvent(event: MouseEvent) {
    console.log('event:', event);
    var target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();

    this.percent =
      Math.min(Math.max(0, event.x - rect.x), rect.width) / rect.width;

    const rightSide = 100 - this.percent * 100;

    // after:right: calc(100% - var(--progress-position) * 100%);

    this.rightSide = 'right-[' + rightSide.toString() + '%]';
    this.beforeRightSide = 'before:' + this.rightSide;
    this.afterRightSide = 'after:' + this.rightSide;
  }

  mouseDown(event: MouseEvent) {
    var target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();

    const percent =
      Math.min(Math.max(0, event.x - rect.x), rect.width) / rect.width;

    this.duration.percent = percent;
    this.duration.currentTime = this.duration.totalTime * percent;
    this.clicked.emit(this.duration);
  }
}
