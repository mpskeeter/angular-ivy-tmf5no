import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { NavbarItem } from '../../../shared-types';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
})
export class ItemComponent {
  @Input() item: Partial<NavbarItem> = {};
  // @ViewChild('Submenuitem', { static: false }) public Submenuitem;
  @Output() SelectedMenu: EventEmitter<Partial<NavbarItem>> =
    new EventEmitter();
}