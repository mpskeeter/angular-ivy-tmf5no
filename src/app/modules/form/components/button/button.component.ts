import {
  Component,
  EventEmitter,
  // Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'form-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  // @Input() button_text: string = '';
  @Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();
}
