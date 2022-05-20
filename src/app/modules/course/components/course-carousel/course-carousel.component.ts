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
    const records: number = this.courses.length;
    return [...Array(Math.round(records / this.itemsPerPage)).keys()];
  }

  getRecords(page: number) {
    const recordsFound = this.courses.filter(
      (p, index) =>
        index >= page * this.itemsPerPage &&
        index < (page + 1) * this.itemsPerPage
    );
    console.log('recordsFound:', recordsFound);
    return recordsFound;
  }

}