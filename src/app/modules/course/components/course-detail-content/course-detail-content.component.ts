import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course, PlayListItem } from '../../../shared-types';
import { PlayerService } from '../../../shared';

@Component({
  selector: 'app-course-detail-content',
  templateUrl: './course-detail-content.component.html',
})
export class CourseDetailContentComponent {
  // @Input() course: Partial<Course> = {};
  @Output() launch: EventEmitter<number> = new EventEmitter<number>();

  constructor(public player: PlayerService) {}

  totalLectures(items: Partial<PlayListItem>[]): number {
    const lectures = items.reduce(function (n, item) {
      return n + item.sources.length;
    }, 0);
    return lectures;
  }
}
