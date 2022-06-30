import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-video-play-pause',
  templateUrl: './video-play-pause.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoPlayPauseComponent {
  @Input() playing: boolean = false;
  @Output() clicked = new EventEmitter<boolean>();

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    event.key.toLowerCase() === 'k' ? this.togglePlay() : () => {};
  }

  togglePlay() {
    this.playing = !this.playing;
    this.clicked.emit(this.playing);
  }
}
