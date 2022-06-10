import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CrudService } from './crud.service';
import { Pagination } from '../../shared-types';

@Injectable({ providedIn: 'root' })
export class PaginationService {
  #pagination: BehaviorSubject<Pagination> = new BehaviorSubject<Pagination>(
    null
  );
  pagination$: Observable<Pagination> = this.#pagination.asObservable();

  //#region disabled
  set disabled(value: boolean) {
    const pagination = {
      ...this.#pagination.value,
      disabled: value,
    };
    this.#pagination.next(pagination);
  }

  get disabled(): boolean {
    return this.#pagination.value.disabled;
  }
  //#endregion

  //#region hidePageSize
  set hidePageSize(value: boolean) {
    const pagination = {
      ...this.#pagination.value,
      hidePageSize: value,
    };
    this.#pagination.next(pagination);
  }

  get hidePageSize(): boolean {
    return this.#pagination.value.hidePageSize;
  }
  //#endregion

  //#region listLength
  set listLength(value: number) {
    const pagination = {
      ...this.#pagination.value,
      listLength: value,
    };
    this.#pagination.next(pagination);
  }

  get listLength(): number {
    return this.#pagination.value.listLength || 0;
  }
  //#endregion

  //#region pageIndex
  set pageIndex(value: number) {
    const pagination = {
      ...this.#pagination.value,
      pageIndex: value,
    };
    this.#pagination.next(pagination);
  }

  get pageIndex(): number {
    return this.#pagination.value.pageIndex;
  }
  //#endregion

  //#region pageSize
  set pageSize(value: number) {
    const pagination = {
      ...this.#pagination.value,
      pageSize: value,
    };
    this.#pagination.next(pagination);
  }

  get pageSize(): number {
    return this.#pagination.value.pageSize;
  }
  //#endregion

  //#region pageSizeOptions
  set pageSizeOptions(value: number[]) {
    const pagination = {
      ...this.#pagination.value,
      pageSizeOptions: value,
    };
    this.#pagination.next(pagination);
  }

  get pageSizeOptions(): number[] {
    return this.#pagination.value.pageSizeOptions;
  }
  //#endregion

  //#region showFirstLastButtons
  set showFirstLastButtons(value: boolean) {
    const pagination = {
      ...this.#pagination.value,
      showFirstLastButtons: value,
    };
    this.#pagination.next(pagination);
  }

  get showFirstLastButtons(): boolean {
    return this.#pagination.value.showFirstLastButtons;
  }
  //#endregion

  //#region page
  set page(value: number) {
    const pagination = {
      ...this.#pagination.value,
      page: value,
    };
    this.#pagination.next(pagination);
  }

  get page(): number {
    return this.#pagination.value.page;
  }
  //#endregion

  constructor() {
    this.pageSize = 4;
  }
}
