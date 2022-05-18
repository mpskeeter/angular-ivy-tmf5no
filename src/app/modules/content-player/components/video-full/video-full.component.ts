import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-video-full',
  templateUrl: './video-full.component.html',
})
export class VideoFullComponent {
  @Input() full: boolean = false;
  @Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  changeMode() {
    this.full != this.full;
    this.clicked.emit(this.full);
  }
}
