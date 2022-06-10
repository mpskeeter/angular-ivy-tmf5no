import { Component, Input } from '@angular/core';
import { Watched } from '../../../shared-types';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
})
export class PlayComponent {
  @Input() watched: Partial<Watched> = {};
}
