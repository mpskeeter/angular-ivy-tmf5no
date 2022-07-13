import {
  ElementRef,
  EventEmitter,
  Component,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

import { Subject } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';

import { ModalService } from '../../services';

@Component({
  selector: 'app-right-side-modal',
  templateUrl: './right-side-modal.component.html',
  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          transform: 'translateX(100%)',
        })
      ),
      state(
        'out',
        style({
          transform: 'translateX(200%)',
        })
      ),
      transition('in => out', animate('1s ease-in-out')),
      transition('out => in', animate('1s ease-in-out')),
    ]),
  ],
})
export class RightSideModalComponent implements OnInit, OnDestroy {
  @Input() title: string = 'Some Default Title';
  elem: HTMLElement;
  @ViewChild('Modal', { static: false }) set modal(el: ElementRef) {
    this.elem = el.nativeElement as HTMLElement;
  }

  destroy$: Subject<boolean> = new Subject<boolean>();

  menuState: string = 'out';

  constructor(public modalService: ModalService) {}

  ngOnInit() {
    this.modalService.open$
      .pipe(
        tap((open: boolean) => (open ? this.openModal() : this.onClose())),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  // ngAfterViewInit(): void {
  //   this.elem = this.modal.nativeElement as HTMLElement;
  // }

  openModal(): void {
    if (this.elem) {
      this.menuState = 'in';
      this.elem.classList.remove('hidden');
      this.elem.classList.add('visible');
      this.elem.style.width = '100vw';
    }
  }

  onClose(): void {
    if (this.elem) {
      this.menuState = 'out';

      setTimeout(() => {
        this.elem.classList.remove('visible');
        this.elem.classList.add('hidden');
        this.elem.style.width = '0';
      }, 1000);
    }
  }
}
