import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ModalService {
  #open: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  open$: Observable<boolean> = this.#open.asObservable();

  open() {
    this.#open.next(true);
  }
  close() {
    this.#open.next(false);
  }
  getStatus(): boolean {
    return this.#open.value;
  }
}
