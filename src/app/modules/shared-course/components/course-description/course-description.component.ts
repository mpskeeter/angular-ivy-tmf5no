import { Component, Input } from '@angular/core';
import { Course } from '../../../shared-types';

@Component({
  selector: 'app-course-description',
  templateUrl: './course-description.component.html',
})
export class CourseDescriptionComponent {
  @Input() title: string = '';
  @Input() course: Partial<Course> = {};
}
