import { Component, Input, OnInit } from '@angular/core';
import { FormTableElement } from '../../../shared-types';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
})
export class DropdownMenuComponent implements OnInit {
  @Input() element: Partial<FormTableElement>;
  @Input() data: Partial<unknown>[] = [];
  @Input() isColumnSelector: boolean = false;
  @Input() displayCheckbox: boolean = true;

  isOpen: boolean = false;
  ariaName: string;

  buildAriaName = () => {
    const label = this.element.ariaName
      ? this.element.ariaName
      : this.element.label;
    return label?.toLowerCase().replace(' ', '') + '-control-list';
  };

  ngOnInit() {
    this.ariaName = this.buildAriaName();
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
