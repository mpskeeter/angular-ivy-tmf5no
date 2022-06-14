import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-save-cancel-buttons',
  templateUrl: './save-cancel-buttons.component.html',
})
export class SaveCancelButtonsComponent {
  @Input() disabled: boolean;
  @Output() save: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() cancel: EventEmitter<boolean> = new EventEmitter<boolean>();
}