import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatedUserService } from '../../../shared';
import { NavbarItem } from '../../../shared-types';
import { MenuService } from '../../../menu';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
})
export class TopNavComponent {
  menuOpen: boolean = false;
  searchOpen: boolean = false;

  selectedMenuDetail;

  constructor(
    public menu: MenuService,
    public authenticatedUserService: AuthenticatedUserService,
    public router: Router,
  ) {}

  openNav() {
    this.menuOpen = !this.menuOpen;
  }

  clickeventhandler(menu: Partial<NavbarItem>) {
    this.router.navigate([menu.link]);
    // this.selectedMenuDetail = menu;
  }
}
