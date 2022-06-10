import { Component, Input } from '@angular/core';
import { FormTableElement } from '../../../shared-types';

@Component({
  selector: 'app-column-selector',
  templateUrl: './column-selector.component.html',
})
export class ColumnSelectorComponent {
  @Input() columns: Partial<FormTableElement>[] = [];

  menu: Partial<FormTableElement> = {};

  ngOnInit() {
    this.menu = {
      label: 'Columns',
      choices: this.columns,
    };
  }
}
