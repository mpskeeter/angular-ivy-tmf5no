import { Component, ViewChild } from '@angular/core';
import { AuthenticatedUserService } from '../../../shared';
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
    public authenticatedUserService: AuthenticatedUserService
  ) {}

  openNav() {
    this.menuOpen = !this.menuOpen;
  }

  clickeventhandler(menu) {
    this.selectedMenuDetail = menu;
  }
}
