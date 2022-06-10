import { Component, Host, Input } from '@angular/core';
import { CheckboxGroupComponent } from '../checkbox-group';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
})
export class CheckboxComponent {
  @Input() value: unknown;
  @Input() label: string;

  constructor(@Host() public checkboxGroup: CheckboxGroupComponent) {}
}
