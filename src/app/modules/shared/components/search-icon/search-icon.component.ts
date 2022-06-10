import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-search-icon',
	templateUrl: './search-icon.component.html',
})
export class SearchIconComponent {
	@Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();
}
