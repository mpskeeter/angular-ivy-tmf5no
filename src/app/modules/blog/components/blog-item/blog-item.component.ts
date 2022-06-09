import { Component, Input } from '@angular/core';
import { BlogItem } from '../../../shared-types';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
})
export class BlogItemComponent {
  @Input() item: Partial<BlogItem> = {};

  displayName(author: Partial<User>) {
    return `${author.firstName.substring(0, 1)}. ${author.lastName}`;
  }
}
