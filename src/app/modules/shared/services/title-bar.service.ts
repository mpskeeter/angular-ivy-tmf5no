import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TitleBarService {
  title: string = '';
  #title: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  title$: Observable<string> = this.#title.asObservable();

  #header: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  header$: Observable<boolean> = this.#header.asObservable();

  setTitle(title) {
    this.title = title;
    this.#title.next(title);
  }
  getTitle() {
    return this.title;
  }

  setHeader(header) {
    this.#header.next(header);
  }
}
