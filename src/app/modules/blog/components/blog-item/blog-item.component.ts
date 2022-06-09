import { Component, Input } from '@angular/core';
import { BlogItem, User } from '../../../shared-types';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
})
export class BlogItemComponent {
  @Input() item: Partial<BlogItem> = {};
}
