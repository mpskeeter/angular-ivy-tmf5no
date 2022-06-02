import { Component, Input } from '@angular/core';
import { PlayerService } from '../../../shared';
import { Item } from '../../../shared-types';

@Component({
  selector: 'app-player-chapter',
  templateUrl: './player-chapter.component.html',
})
export class PlayerChapterComponent {
  @Input() item: Partial<Item> = {};
  @Input() show: boolean = false;

  constructor(public service: PlayerService) {}
}
