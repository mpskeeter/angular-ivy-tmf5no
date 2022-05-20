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

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    event.key.toLowerCase() === 'm' ? this.toggleMute() : () => {};
  }

  hover: boolean = false;

  previousVolume: number;

  changeVolume(volume) {
    this.volume.volume = volume;
    this.volume.muted = this.volume.volume == 0;
    this.clicked.emit(this.volume);
  }

  toggleMute() {
    this.volume.muted = !this.volume.muted;
    this.clicked.emit(this.volume);
  }
}
