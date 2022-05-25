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
    event.key.toLowerCase() === 'm' ? this.toggleMute() : () => {};
  }

  hover: boolean = false;

  previousVolume: number;

  changeVolume(volume): void {
    this.volume.volume = parseFloat(volume);
    this.clicked.emit(this.volume);
  }

  toggleMute(): void {
    this.volume.muted = !this.volume.muted;
    this.clicked.emit(this.volume);
  }
}
