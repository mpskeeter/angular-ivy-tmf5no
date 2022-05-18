import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-video-full',
  templateUrl: './video-full.component.html',
})
export class VideoFullComponent {
  @Input() full: boolean = false;
  @Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  changeMode(toggle: boolean) {
    this.full = toggle;
    this.clicked.emit(this.full);
  }
}
