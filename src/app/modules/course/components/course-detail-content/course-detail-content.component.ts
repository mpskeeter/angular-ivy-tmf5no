import { Component, Input } from '@angular/core';
import { Course } from '../../../shared-types';

@Component({
  selector: 'app-course-detail-content',
  templateUrl: './course-detail-content.component.html',
})
export class CourseDetailContentComponent {
  @Input() course: Partial<Course> = {};
}
