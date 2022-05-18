import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Screen } from '../../models';

@Component({
  selector: 'app-video-timeline',
  templateUrl: './video-timeline.component.html',
})
export class VideoTimelineComponent {
  @ViewChild('timeline') timeline: HTMLElement;
}

