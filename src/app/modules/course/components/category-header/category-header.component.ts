import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../../shared-types';

@Component({
  selector: 'app-category-header',
  templateUrl: './category-header.component.html',
})
export class CategoryHeaderComponent {
  @Input() item: Partial<Category> = {};
  // @Input() allowCategoryNavigate: boolean = false;
}
