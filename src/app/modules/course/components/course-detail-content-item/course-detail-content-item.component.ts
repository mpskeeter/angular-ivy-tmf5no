import { Component, Input } from '@angular/core';
import { PlayListItem } from '../../../shared-types';

@Component({
  selector: 'app-course-detail-content-item',
  templateUrl: './course-detail-content-item.component.html',
})
export class CourseDetailContentItemComponent {
  @Input() item: Partial<PlayListItem> = {};
}
