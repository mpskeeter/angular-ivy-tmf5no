import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-video-speed',
  templateUrl: './video-speed.component.html',
})
export class VideoSpeedComponent {
  @Input() speed: number = 1.0;
  @Output() clicked: EventEmitter<number> = new EventEmitter<number>();

  changeSpeed() {
    this.speed += 0.25;
    if (this.speed > 2.0) this.speed = 0.25;
    this.clicked.emit(this.speed);
  }
}
