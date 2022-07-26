import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NavbarItem } from '../../../shared-types';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent implements OnChanges {
  @Input() menu: Partial<NavbarItem>[] = [];
  @Input() activeLink: Partial<NavbarItem> =
    this.menu.length > 0 ? this.menu[0] : {};

  constructor(private route: Router) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.menu) {
      this.activeLink = this.menu?.find((item: Partial<NavbarItem>) => {
        return this.route.url.includes(item.link);
      });
    }
  }
}
