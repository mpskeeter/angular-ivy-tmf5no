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

  percent: number;
  rightSide: string;

  setEvent(event: MouseEvent) {
    var target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();

    this.percent =
      Math.min(Math.max(0, event.x - rect.x), rect.width) / rect.width;

    this.rightSide = `before:right-[${100 - this.percent * 100}%]`;

    console.log('percent:', {
      percent: this.percent,
      rightSide: this.rightSide,
    });
  }
}
