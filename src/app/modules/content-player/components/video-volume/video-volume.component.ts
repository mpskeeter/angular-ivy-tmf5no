import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { VolumeControls } from '../../models';

@Component({
  selector: 'app-video-volume',
  templateUrl: './video-volume.component.html',
})
export class VideoVolumeComponent {
  @Input() volume: Partial<VolumeControls> = {};
  @Output() clicked = new EventEmitter<Partial<VolumeControls>>();

  previous: number = 0;

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    event.key.toLowerCase() === 'm'
      ? this.toggleMute(!this.volume.muted)
      : () => {};
  }

  hover: boolean = false;

  previousVolume: number;

  changeVolume(volume): void {
    this.volume.volume = parseFloat(volume);
    this.volume.muted = this.volume.volume === 0;
    this.clicked.emit(this.volume);
  }

  toggleMute(isMuted: boolean): void {
    switch (isMuted) {
      case true:
        this.previousVolume = this.volume.volume;
        this.changeVolume(0);
        break;
      case false:
        this.changeVolume(this.previousVolume);
        break;
    }
  }
}
