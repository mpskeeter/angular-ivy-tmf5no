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
  @Input() items: Partial<NavbarItem>[];
  @ViewChild('Submenuitem', { static: false }) public Submenuitem;
  @Output() SelectedMenu: EventEmitter<Partial<NavbarItem>> =
    new EventEmitter();
}
