import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  setEvent(event: MouseEvent) {
    var target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();

    const percent =
      Math.min(Math.max(0, event.x - rect.x), rect.width) / rect.width;
  }

  mouseMove(event: MouseEvent) {
    console.log('event:', event);
    var target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();

    const percent =
      Math.min(Math.max(0, event.x - rect.x), rect.width) / rect.width;

    this.duration.percent = percent;
    this.duration.currentTime = this.duration.totalTime * percent;
    this.clicked.emit(this.duration);
  }
}
