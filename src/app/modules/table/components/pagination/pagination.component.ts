import { Component, Input } from '@angular/core';
import { Pagination } from '../../../shared-types';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
  @Input() pagination: Partial<Pagination> = {};

  get listLength(): number {
    return this.pagination.listLength || 0;
  }

  public get start() {
    if (!this.listLength) return 0;
    return (this.pagination.pageSize + 1) * (this.pagination.page || 0) || 1;
  }

  public get end() {
    return !this.listLength
      ? 0
      : ((this.pagination.page || 0) + 1) * this.pagination.pageSize >=
        this.listLength
      ? this.listLength
      : ((this.pagination.page || 0) + 1) * this.pagination.pageSize;
  }

  public get firstPage() {
    if (this.pagination.page - 1 >= 1) return this.pagination.page - 1;
    return 1;
  }

  public get lastPage() {
    return Math.ceil(this.listLength / this.pagination.pageSize);
  }

  range = (start, end) => {
    const length = end - start;
    return Array.from({ length }, (_, i) => start + i);
  };

  public get pageRange() {
    return [...this.range(this.firstPage, this.lastPage)];
  }
}
