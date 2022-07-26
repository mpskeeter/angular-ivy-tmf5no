import { Component, Input } from '@angular/core';
import { NavbarItem } from '../../../shared-types';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
	styleUrls: ['./tab.component.scss'],
})
export class TabComponent {
  @Input() menu: Partial<NavbarItem>[] = [];
  @Input() activeLink: Partial<NavbarItem> = this.menu[0];
}
