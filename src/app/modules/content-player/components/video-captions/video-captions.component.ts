import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { Captions } from '../../models';

@Component({
  selector: 'app-video-captions',
  templateUrl: './video-captions.component.html',
})
export class VideoCaptionsComponent {
  @Input() captions: Partial<Captions> = {};
  @Output() clicked: EventEmitter<Partial<Captions>> = new EventEmitter<
    Partial<Captions>
  >();

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key.toLowerCase()) {
      case 'c':
        if (!this.captions.disabled) this.toggleCaptions();
        break;
    }
  }

  toggleCaptions() {
    this.captions.captions = !this.captions.captions;
    this.clicked.emit(this.captions);
  }
}
