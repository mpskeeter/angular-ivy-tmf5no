import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-video-theater',
  templateUrl: './video-theater.component.html',
})
export class VideoTheaterComponent {
  @Input() theaterMode: boolean = false;
  @Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  changeMode() {
    this.theaterMode != this.theaterMode;
    this.clicked.emit(this.theaterMode);
  }
}
