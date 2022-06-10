import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-delete',
  templateUrl: './button-delete.component.html',
})
export class ButtonDeleteComponent {
  @Output() clicked: EventEmitter<null> = new EventEmitter<null>();
}
