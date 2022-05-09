import { Component, Input, OnInit } from '@angular/core';
// import { DomSanitizer } from '@angular/platform-browser';
import { Category } from '../../../shared-types';

@Component({
  selector: 'app-category-carousel',
  templateUrl: './category-carousel.component.html',
})
export class CategoryCarouselComponent {
  // @Input() category: Partial<Category> = {};
  @Input() items: Partial<Category>[] = [];
  @Input() allowCategoryNavigate: boolean = false;

  selectedIndex: number = -1;
  selectedItem: Partial<Category> = {};

  page: number = 1;

  // constructor(public domSanitizer: DomSanitizer) {}

  setPage(page: number) {
    this.page = page;
  }
}
