import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PlayListItem } from '../../../shared-types';

@Component({
  selector: 'app-course-detail-content-item',
  templateUrl: './course-detail-content-item.component.html',
})
export class CourseDetailContentItemComponent {
  @Input() item: Partial<PlayListItem> = {};
  @Output() launch: EventEmitter<number> = new EventEmitter<number>();
}
