import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-x-icon',
	templateUrl: './x-icon.component.html',
})
export class XIconComponent {
  @Input() allowClick: boolean = false;
	@Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();
}
