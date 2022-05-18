import {
  // ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { VideoDuration, Screen } from '../../models';

@Component({
  selector: 'app-video-timeline',
  templateUrl: './video-timeline.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoTimelineComponent {
  //implements OnChanges {
  @Input() duration: Partial<VideoDuration> = {};
  @Output() clicked: EventEmitter<Partial<VideoDuration>> = new EventEmitter<
    Partial<VideoDuration>
  >();

  percent: number;
  rightSide: string;
  beforeRightSide: string;
  afterRightSide: string;

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes:', changes);
    const rightSide = 'right-[' + this.duration.percent.toString() + '%]';
    console.log('rightSide:', rightSide);
    this.beforeRightSide = 'before:' + rightSide;
    this.afterRightSide = 'after:' + rightSide;
  }

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
    this.duration.percent = this.percent;
    this.duration.currentTime = this.duration.totalTime * this.percent;
    this.clicked.emit(this.duration);
  }
}
