import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'formly-button',
  templateUrl: './formly-button.component.html',
})
export class FormlyButtonComponent {
  @Input() text: string = 'Save';
  @Input() bg_color: string = 'bg-app-secondary';
  @Input() text_color: string = 'text-app-secondary';
  @Input() disabled: boolean = false;
  @Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();
}
