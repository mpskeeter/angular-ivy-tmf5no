import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'carousel-previous-button',
  templateUrl: './carousel-previous-button.component.html',
})
export class CarouselPreviousButtonComponent {
  @Input() enabled: boolean = false;
  @Output() previousSlide = new EventEmitter<MouseEvent>();
}
