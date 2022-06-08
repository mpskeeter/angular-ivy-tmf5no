import {
  Directive,
  ElementRef,
  Optional,
  HostListener,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[outsideClick]',
})
export class OutsideClickDirective {
  @Output('outsideClick') outsideClick = new EventEmitter<MouseEvent>();

  @HostListener('document:click', ['$event', '$event.target'])
  onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) {
      return;
    }
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.outsideClick.emit(event);
    }
  }

  constructor(private elementRef: ElementRef) {}
}
