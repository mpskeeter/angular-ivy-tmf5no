import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PlayListItem } from '../../../shared-types';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
})
export class CourseItemComponent {
  @Input() item: Partial<PlayListItem> = {};
  @Output() launch: EventEmitter<number> = new EventEmitter<number>();
}
