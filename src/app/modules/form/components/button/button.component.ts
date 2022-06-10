import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'form-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() text: string = 'Save';
  @Input() bg_color: string = 'bg-app-secondary';
  @Input() text_color: string = 'text-app-secondary';
  @Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();
}
