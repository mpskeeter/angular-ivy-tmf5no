import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-date',
  templateUrl: './course-date.component.html',
})
export class CourseDateComponent {
  @Input() label: string = '';
  @Input() data: Date | string | null = null;

  get elementDate() {
    let inDate = this.data as Date;
    const checkDate = (date, type) =>
      Object.prototype.toString.call(date) === `[object ${type}]`;

    if (!checkDate(inDate, 'Date')) {
      if (!checkDate(inDate, 'String')) return;
      inDate = new Date(inDate);
    }

    return inDate;
  }
}
