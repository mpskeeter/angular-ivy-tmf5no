import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-bell-icon',
	templateUrl: './bell-icon.component.html',
})
export class BellIconComponent {
	@Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();
}
