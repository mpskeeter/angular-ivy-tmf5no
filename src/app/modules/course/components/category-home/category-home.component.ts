import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared';

@Component({
  selector: 'app-category-home',
  templateUrl: './category-home.component.html',
  providers: [CategoryService],
})
export class CategoryHomeComponent implements OnInit {
  constructor(public categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.getRawCategory();
  }
}
