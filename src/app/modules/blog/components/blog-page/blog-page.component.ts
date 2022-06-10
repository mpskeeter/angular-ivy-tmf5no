import { Component, Input } from '@angular/core';
import { BlogItemService } from '../../../shared';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
})
export class BlogPageComponent {

  constructor(public service: BlogItemService) {
    this.service.get();
  }
}
