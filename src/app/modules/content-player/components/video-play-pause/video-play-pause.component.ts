import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { ReturnValue } from '../../models';

@Component({
  selector: 'app-video-play-pause',
  templateUrl: './video-play-pause.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoPlayPauseComponent {
  @Input() playing: boolean = false;
  @Output() clicked = new EventEmitter<ReturnValue>();

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    event.key.toLowerCase() === 'k' ? this.togglePlay(true) : () => {};
    // event.key.toLowerCase() === 'k' ? this.togglePlay(true) : null;
  }

  togglePlay(display: boolean) {
    this.playing = !this.playing;
    this.clicked.emit({ display, value: this.playing });
  }
}
