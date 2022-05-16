import { Component } from '@angular/core';
import { MenuService } from '../../../menu';
import { ModalService } from '../../../modal';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
})
export class TopNavComponent {
  open: boolean = false;

  constructor(public menu: MenuService, public modalService: ModalService) {}

  openNav() {
    this.open = !this.open;
    this.modalService.open();
  }
}
