import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  // url: string = '';

  constructor(private route: Router) {
    // this.route.url.pipe(
    //   map((segments) => {
    //     this.url = segments.join('');
    //   })
    // );

    console.log('this.route.url:', this.route.url);
  }

  ngOnInit() {
    // console.log('route:', this.route);
    console.log('activeLink:', this.activeLink);
  }
}
