import { Component, Input, OnInit } from '@angular/core';
import { FormTableElement } from '../../../shared-types';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
})
export class TableHeaderComponent implements OnInit {
  @Input() element: Partial<FormTableElement>;
  @Input() data: Partial<unknown>[] = [];

  columnAriaName: string;

  // choices: Partial<FormTableElement>[] = [];

  buildAriaName = (label: string) => label + '-control-list';

  constructor() {}

  ngOnInit() {
    this.columnAriaName = this.buildAriaName(
      this.element.label.toLowerCase().replace(' ', '')
    );

    this.element.choices = [
      {
        label: 'Sort',
        ariaName: 'sort-' + this.element.name,
      },
      {
        label: 'Filter',
        ariaName: 'filter-' + this.element.name,
        choices: this.data.map((item) => ({ label: item[this.element.name] })),
      },
    ];
  }

  displayMenu() {
    // console.log('clicked');
  }

  displayChoice($event) {
    // console.log('choice selected:', {
    //   event: $event,
    //   element: this.element,
    //   data: this.data,
    // });
  }
}
