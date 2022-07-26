import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NavbarItem } from '../../../shared-types';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  @Input() menu: Partial<NavbarItem>[] = [];
  @Input() activeLink: Partial<NavbarItem> =
    this.menu.length > 0 ? this.menu[0] : {};

  constructor(private route: ActivatedRoute) {
    const url: Observable<string> = route.url.pipe(
      map((segments) => segments.join(''))
    );

    console.log('url:', url);
  }

  ngOnInit() {
    console.log('route:', this.route);
    console.log('activeLink:', this.activeLink);
  }
}
