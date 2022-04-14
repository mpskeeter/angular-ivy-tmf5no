import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService, BaseName } from '../../shared-types';
import { PaginationService } from './pagination.service';

@Injectable()
// export class CrudService<T extends BaseName> implements ApiService<T> {
export class CrudService<T extends BaseName> extends PaginationService {
  protected _items: Partial<T>[] = [];
  protected item: BehaviorSubject<Partial<T> | null> =
    new BehaviorSubject<Partial<T> | null>(null);
  item$: Observable<Partial<T> | null> = this.item.asObservable();

  protected items: BehaviorSubject<Array<Partial<T>> | null> =
    new BehaviorSubject<Array<Partial<T>> | null>(null);
  items$: Observable<Array<Partial<T>> | null> = this.items.asObservable();

  protected getNextId(): number {
    if (this._items?.length === 0) return 1;
    return (
      Math.max(...this._items?.map((item: Partial<T>) => item.id || 0)) + 1
    );
  }

  constructor() {
    super();
    this.item$.subscribe((item: Partial<T>) => {
      if (item) {
        this.listLength = 1;
      }
      this.page = 0;
    });

    this.items$.subscribe((items: Partial<T>[]) => {
      if (items) {
        this.listLength = items?.length;
      }
      this.page = 0;
    });
  }

  // This would actually be done by the api endpoint
  // asc = (a: Partial<T>, b: Partial<T>, field: string): number => {
  //   return a.id[field] > b[field] ? 1 : a[field] < b[field] ? -1 : 0;
  // };
  asc = (a: Partial<T>, b: Partial<T>): number => {
    return a.id > b.id ? 1 : a.id < b.id ? -1 : 0;
  };

  // This would actually be done by the api endpoint
  desc = (a: Partial<T>, b: Partial<T>, field: string): number => {
    return a[field] < b[field] ? 1 : a[field] > b[field] ? -1 : 0;
  };

  blank(): void {
    this.item.next(null);
  }

  get(id?: number): void {
    id > 0
      ? this.item.next(this._items.find((item) => item.id === id))
      : this.items.next(this._items);
  }

  filterOutOriginal = (item: Partial<T>) =>
    this._items.filter((original: Partial<T>) => original.id !== item.id);

  remove(item: Partial<T>): void {
    if (item.id > 0) {
      this._items = this.filterOutOriginal(item);
      this.items.next(this._items);
    }
  }

  save(item: Partial<T>): void {
    if (!item.id) {
      item.id = this.getNextId();
    }
    this._items = [...this.filterOutOriginal(item), item].sort(this.asc);
    this.items.next(this._items);
  }

  create() {}
  read() {}
  update() {}
  delete(id: number): void {}
}
