import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-video-theater',
  templateUrl: './video-theater.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoTheaterComponent {
  @Input() theaterMode: boolean = false;
  @Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    event.key.toLowerCase() === 't'
      ? this.changeMode(!this.theaterMode)
      : () => {};
  }

  changeMode(toggle: boolean) {
    this.theaterMode = toggle;
    this.clicked.emit(this.theaterMode);
  }
}
