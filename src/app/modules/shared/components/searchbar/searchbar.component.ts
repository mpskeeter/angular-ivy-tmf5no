import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
})
export class SearchbarComponent {
  @Input() search: string = '';
  @Input() debounceTime = 300;
  @Output() searchChange: EventEmitter<string> = new EventEmitter();
  @Output() isOpen: EventEmitter<boolean> = new EventEmitter();

  inputValue = new Subject<string>();
  trigger = this.inputValue.pipe(
    debounceTime(this.debounceTime),
    distinctUntilChanged()
  );

  subscription$: Subject<boolean> = new Subject<boolean>();

  panel: boolean = false;

  constructor() {}

  ngOnInit() {
    this.trigger
      .pipe(takeUntil(this.subscription$))
      .subscribe((searchString: string) => {
        this.searchChange.emit(searchString);
      });
  }

  ngOnDestroy() {
    this.subscription$.next(true);
    this.subscription$.complete();
  }

  onInput(e: any) {
    this.inputValue.next(e.target.value);
  }

  toggle() {
    this.panel = !this.panel;
    this.isOpen.emit(this.panel);
  }
}
