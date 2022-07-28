import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { NavbarItem } from '../../../shared-types';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
})
export class MenuitemComponent {
  @Input() item: Partial<NavbarItem> = {};
  @Output() SelectedMenu: EventEmitter<Partial<NavbarItem>> =
    new EventEmitter();
}