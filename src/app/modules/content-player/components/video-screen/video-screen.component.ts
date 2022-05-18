import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Screen } from '../../models';

@Component({
  selector: 'app-video-screen',
  templateUrl: './video-screen.component.html',
})
export class VideoScreenComponent {
  @Input() screen: Partial<Screen> = {};
  @Output() clicked = new EventEmitter<Screen>();

  buttonClick(screen: Partial<Screen>) {
    this.screen = screen;
    this.clicked.emit(this.screen);
  }

  changeTheater() {
    this.screen.theater = !this.screen.theater;
    this.clicked.emit(this.screen);
  }
}
