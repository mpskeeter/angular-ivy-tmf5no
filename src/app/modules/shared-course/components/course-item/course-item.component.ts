import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../../shared-types';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
})
export class CourseItemComponent {
  @Input() item: Partial<Item> = {};
  @Output() launch: EventEmitter<number> = new EventEmitter<number>();

  isOpen: boolean = false;
}
