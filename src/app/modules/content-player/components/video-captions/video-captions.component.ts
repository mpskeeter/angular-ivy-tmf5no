import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-video-captions',
  templateUrl: './video-captions.component.html',
})
export class VideoCaptionsComponent {
  @Input() captions: boolean = false;
  @Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleCaptions() {
    this.captions = !this.captions;
    this.clicked.emit(this.captions);
  }
}
