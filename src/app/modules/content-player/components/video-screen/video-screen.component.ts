import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { Screen } from '../../models';

@Component({
  selector: 'app-video-screen',
  templateUrl: './video-screen.component.html',
})
export class VideoScreenComponent {
  @Input() screen: Partial<Screen> = {};
  @Output() clicked = new EventEmitter<Partial<Screen>>();

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    event.key.toLowerCase() === 'i'
      ? this.changeMini(!this.screen.mini)
      : () => {};
  }

  emit() {
    this.clicked.emit(this.screen);
  }

  changeMini(toggle: boolean) {
    this.screen.mini = toggle;
    this.emit();
  }

  changeTheater(toggle: boolean) {
    this.screen.theater = toggle;
    this.emit();
  }

  changeFull(toggle: boolean) {
    this.screen.full = toggle;
    this.emit();
  }
}
