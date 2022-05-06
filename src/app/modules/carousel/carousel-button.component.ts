import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'carousel-button',
  templateUrl: './carousel-button.component.html',
})
export class CarouselButtonComponent {
  @Input() enabled: boolean = false;
  @Output() buttonClick = new EventEmitter<MouseEvent>();
}
