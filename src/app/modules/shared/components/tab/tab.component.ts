import { Component, Input } from '@angular/core';
import { NavbarItem } from '../../../shared-types';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
})
export class TabComponent {
  @Input() menu: Partial<NavbarItem>[] = [];

  activeLink = this.menu[0];
}
