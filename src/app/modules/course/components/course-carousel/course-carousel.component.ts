import { Component, Input } from '@angular/core';
import { LayoutService, CustomBreakpointNames } from '../../../shared';
import { Course } from '../../../shared-types';

@Component({
  selector: 'app-course-carousel',
  templateUrl: './course-carousel.component.html',
})
export class CourseCarouselComponent implements OnInit {
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

  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.layoutService.subscribeToLayoutChanges().subscribe(observerResponse => {
      // You will have all matched breakpoints in observerResponse

      if (this.layoutService.isBreakpointActive(CustomBreakpointNames.xxl)) {
        this.itemsPerPage = 6;
      }

      if (this.layoutService.isBreakpointActive(CustomBreakpointNames.xl)) {
        this.itemsPerPage = 5;
      }

      if (this.layoutService.isBreakpointActive(CustomBreakpointNames.lg)) {
        this.itemsPerPage = 4;
      }

      if (this.layoutService.isBreakpointActive(CustomBreakpointNames.md)) {
        this.itemsPerPage = 3;
      }

      if (this.layoutService.isBreakpointActive(CustomBreakpointNames.sm)) {
        this.itemsPerPage = 2;
      }

    });
  }

}
