import { Component, Input } from '@angular/core';
import { PlayerService } from '../../../shared';
import { PlayListItem } from '../../../shared-types';

@Component({
  selector: 'app-player-chapter',
  templateUrl: './player-chapter.component.html',
})
export class PlayerChapterComponent {
  @Input() item: Partial<PlayListItem> = {};
  @Input() show: boolean = false;

  constructor(public service: PlayerService) {}
}
