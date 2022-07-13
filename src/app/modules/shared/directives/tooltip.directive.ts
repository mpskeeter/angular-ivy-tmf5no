import {
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Input,
  OnDestroy,
} from '@angular/core';

import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[tooltip]',
  //   styles: [
  //     `
  //   .tooltip-container {
  //     text-align: center;
  //     z-index: 100;
  //     position: fixed;
  //     padding: 6px 12px;
  //     font-size: 0.66rem;
  //     font-weight: 600;
  //     line-height: initial;
  //     color: white;
  //     width: auto;
  //     background: #111111ee;
  //     box-sizing: border-box;
  //     opacity: 0;
  //     transform: translate(-50%, -30%);
  //     animation: tooltip-slide 0.18s ease-out 0.5s;
  //     animation-fill-mode: forwards;
  //     pointer-events: none;
  // }

  // @keyframes tooltip-slide {
  //   0% {
  //     opacity: 0;
  //     transform: translate(-50%, -30%);
  //   }
  //   100% {
  //     opacity: 1;
  //     transform: translate(-50%, 0);
  //   }
  // }
  //   `,
  //   ],
})
export class TooltipDirective implements OnDestroy {
  @Input() tooltip = ''; // The text for the tooltip to display
  @Input() delay? = 190; // Optional delay input, in ms

  private myPopup;
  private timer;

  private hovered: boolean = false;

  remove = () => {
    if (this.myPopup) {
      this.hovered = false;
      this.myPopup.remove();
    } 
  }

  constructor(
    private el: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnDestroy(): void {
    this.remove();
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.hovered = true;
    this.timer = setTimeout(() => {
      let x =
        this.el.nativeElement.getBoundingClientRect().left +
        this.el.nativeElement.offsetWidth / 2; // Get the middle of the element
      let y =
        this.el.nativeElement.getBoundingClientRect().top +
        this.el.nativeElement.offsetHeight +
        6; // Get the bottom of the element, plus a little extra
      this.createTooltipPopup(x, y);
    }, this.delay);
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.timer) clearTimeout(this.timer);
    this.remove();
  }

  private createTooltipPopup(x: number, y: number) {
    // console.log('createTooltipPopup:', { x, y });
    let popup = this.document.createElement('div');
    popup.innerHTML = this.tooltip;
    popup.setAttribute(
      'class',
      'text-center z-100 fixed py-1.5 px-3 text-xs font-semibold leading-none text-white w-auto bg-[#111111ee] box-border'
    );

    popup.style.top = y.toString() + 'px';
    popup.style.left = x.toString() + 'px';
    this.document.body.appendChild(popup);
    this.myPopup = popup;
    setTimeout(() => {
      this.remove();
    }, 5000); // Remove tooltip after 5 seconds
  }
}
