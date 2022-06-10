import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
})
export class ButtonAddComponent {
  @Output() clicked: EventEmitter<null> = new EventEmitter<null>();
}
