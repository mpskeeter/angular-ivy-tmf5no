import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { NavbarItem } from '../../../shared-types';

@Component({
  selector: 'app-submenu-items',
  templateUrl: './submenu-items.component.html',
})
export class SubmenuItemsComponent {
  @Input() SubMenuItems: Partial<NavbarItem>[];
  @ViewChild('Submenuitem') public Submenuitem;
  @Output() SelectedMenu: EventEmitter<Partial<NavbarItem>> =
    new EventEmitter();

  constructor(public router: Router) {}

  clickeventhandler(menu: Partial<NavbarItem>) {
    this.SelectedMenu.emit(menu);
  }
}
