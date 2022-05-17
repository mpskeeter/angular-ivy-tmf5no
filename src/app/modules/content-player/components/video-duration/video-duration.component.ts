import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VideoDuration } from '../../models';

@Component({
  selector: 'app-video-duration',
  templateUrl: './video-duration.component.html',
})
export class VideoDurationComponent {
  @Input() duration: Partial<VideoDuration> = {};
}
