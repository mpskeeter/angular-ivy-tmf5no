import { Component, Input } from '@angular/core';
import { PlayListItem } from '../../../shared-types';

@Component({
  selector: 'app-player-chapter',
  templateUrl: './player-chapter.component.html',
})
export class PlayerChapterComponent {
  @Input() item: Partial<PlayListItem> = {};
}
