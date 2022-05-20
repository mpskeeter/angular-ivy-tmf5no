import { Component, Input } from '@angular/core';
import { Course } from '../../../shared-types';

@Component({
  selector: 'app-course-carousel',
  templateUrl: './course-carousel.component.html',
})
export class CourseCarouselComponent {
  @Input() title: string = '';
  @Input() courses: Partial<Course>[] = [];

  itemsPerPage: number = 3;

  pages(): number[] {
    return [
      ...Array(Math.ceil(this.courses.length / this.itemsPerPage)).keys(),
    ];
  }

  getRecords(page: number) {
    return this.courses.filter(
      (p, index) =>
        index >= page * this.itemsPerPage &&
        index < (page + 1) * this.itemsPerPage
    );
  }
}
