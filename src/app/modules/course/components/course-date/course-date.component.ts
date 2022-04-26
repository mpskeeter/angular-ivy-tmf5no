import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-date',
  templateUrl: './course-date.component.html',
})
export class CourseDateComponent {
  @Input() label: string = '';
  @Input() data: Date | null = null;
}