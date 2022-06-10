import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../../shared-types';

@Component({
  selector: 'app-category-panel',
  templateUrl: './category-panel.component.html',
})
export class CategoryPanelComponent {
  @Input() category: Partial<Category> = {};
  @Input() allowCategoryNavigate: boolean = false;
}
