import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-video-captions',
  templateUrl: './video-captions.component.html',
})
export class VideoCaptionsComponent {
  @Input() captions: Partial<Captions> = {};
  @Output() clicked: EventEmitter<Partial<Captions>> = new EventEmitter<
    Partial<Captions>
  >();

  toggleCaptions() {
    this.captions.captions = !this.captions.captions;
    this.clicked.emit(this.captions);
  }
}
