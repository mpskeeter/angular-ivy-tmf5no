import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { FormTableElement } from '../../../shared-types';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
})
export class DropdownMenuComponent implements OnInit {
  @Input() element: Partial<FormTableElement>;
  @Input() data: Partial<unknown>[] = [];
  @Input() isColumnSelector: boolean = false;
  @Input() displayCheckbox: boolean = true;

  @HostListener('document:click', ['$event', '$event.target'])
  onClick(event: MouseEvent, targetElement: HTMLElement): void {
    console.log('event:', event);
    console.log('targetElement:', targetElement);
    if (!targetElement) {
      return;
    }
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.isOpen = false;
    }
  }

  isOpen: boolean = false;
  ariaName: string;

  buildAriaName = () => {
    const label = this.element.ariaName
      ? this.element.ariaName
      : this.element.label;
    return label?.toLowerCase().replace(' ', '') + '-control-list';
  };

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.ariaName = this.buildAriaName();
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
