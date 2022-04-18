import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarItem } from '../../../shared-types';

@Component({
  selector: 'app-menu-items-dropdown',
  templateUrl: './menu-items-dropdown.component.html',
})
export class MenuItemsDropdownComponent {
  @Input() menu: Partial<NavbarItem> = {};
  @Input() text_color: string = 'text-app-accent';

  openMenu: boolean = false;

  constructor(private router: Router) {}

  navigateMainMenu(path: string) {
    if (!this.menu.items) {
      this.router.navigate([path]);
    } else {
      this.openMenu = true;
    }
  }

  navigateSubMenu(path: string) {
    this.openMenu = false;
    this.router.navigate([path]);
  }
}
