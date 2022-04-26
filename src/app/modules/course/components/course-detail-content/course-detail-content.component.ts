import { Component, Input } from '@angular/core';
import { Course } from '../../../shared-types';

@Component({
  selector: 'app-course-detail-content',
  templateUrl: './course-detail-content.component.html',
})
export class CourseDetailContentComponent {
  @Input() course: Partial<Course> = {};

  get totalLectures(): number {
    const lectures = this.course.playlist.items.reduce(function (n, item) {
      return n + item.sources.length;
    }, 0);
    return lectures;
  }
}
