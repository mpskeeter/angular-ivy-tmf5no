import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { ReturnValue, VolumeControls } from '../../models';

@Component({
  selector: 'app-video-volume',
  templateUrl: './video-volume.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoVolumeComponent {
  @Input() volume: Partial<VolumeControls> = {};
  @Output() clicked = new EventEmitter<ReturnValue>();

  previous: number = 0;
  display: boolean = false;

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    event.key.toLowerCase() === 'm'
      ? this.toggleMute(true)
      : () => {};
  }

  hover: boolean = false;

  previousVolume: number;

  changeVolume(volume): void {
    this.volume.volume = parseFloat(volume);
    this.volume.muted = this.volume.volume === 0;
    this.clicked.emit({ display: this.display, value: this.volume });
  }

  toggleMute(display: boolean): void {
    if (display) {
      this.display = display;
    }
    switch (!this.volume.muted) {
      case true:
        this.previousVolume = this.volume.volume;
        this.changeVolume(0);
        break;
      case false:
        this.changeVolume(this.previousVolume);
        break;
    }
    this.display = false;
  }
}
