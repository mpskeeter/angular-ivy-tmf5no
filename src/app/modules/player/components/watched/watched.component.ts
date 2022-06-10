import { Component, Input } from '@angular/core';
import { Watched } from '../../../shared-types';

@Component({
  selector: 'app-watched',
  templateUrl: './watched.component.html',
})
export class WatchedComponent {
  @Input() watched: Partial<Watched> = {};
}
