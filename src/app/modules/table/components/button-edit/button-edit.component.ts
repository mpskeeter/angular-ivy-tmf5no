import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-edit',
  templateUrl: './button-edit.component.html',
})
export class ButtonEditComponent {
  @Output() clicked: EventEmitter<null> = new EventEmitter<null>();
}
