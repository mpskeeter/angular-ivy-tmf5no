import { Component } from '@angular/core';
import { TitleBarService } from '../../../shared';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  constructor(
    public titlebarService: TitleBarService
  ) {}
}
