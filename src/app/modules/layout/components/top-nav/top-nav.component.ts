import { Component } from '@angular/core';
import { AuthenticatedUserService } from '../../../shared';
import { MenuService } from '../../../menu';
import { ModalService } from '../../../modal';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
})
export class TopNavComponent {
  menuOpen: boolean = false;

  searchOpen: boolean = false;

  constructor(
    public menu: MenuService,
    public modalService: ModalService,
    public authenticatedUserService: AuthenticatedUserService,
  ) {}

  openNav() {
    console.log('navbar button clicked!');
    this.menuOpen = !this.menuOpen;
    this.modalService.open();
  }
}
