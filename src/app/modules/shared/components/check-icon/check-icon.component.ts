import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-check-icon',
	templateUrl: './check-icon.component.html',
})
export class CheckIconComponent {
  @Input() allowClick: boolean = false;
	@Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();
}
