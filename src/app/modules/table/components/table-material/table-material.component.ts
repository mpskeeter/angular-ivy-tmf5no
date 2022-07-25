import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormTableElement } from '@shared-types';

@Component({
	selector: 'app-table-material',
	templateUrl: './table-material.component.html',
	styleUrls: ['./table-material.component.scss'],
})
export class TableMaterialComponent implements OnInit {
	@Input() headers: Partial<FormTableElement>[] = [];
	// @Input() data: Observable<unknown[]>;
	@Input() data: Partial<unknown>[] = [];
	@Output() add: EventEmitter<null> = new EventEmitter<null>();
	@Output() edit: EventEmitter<unknown> = new EventEmitter<unknown>();
	@Output() delete: EventEmitter<unknown> = new EventEmitter<unknown>();

	get displayedColumns() {
		return [
			...this.headers
				.filter((item) => item.tableDisplay)
				.map((item) => item.name),
			'actions',
		];
	}

	constructor() {}

	ngOnInit(): void {}
}
