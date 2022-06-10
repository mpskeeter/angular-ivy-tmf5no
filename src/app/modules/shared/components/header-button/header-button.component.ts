import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-header-button',
	templateUrl: './header-button.component.html',
})
export class HeaderButtonComponent {
	@Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();
}
