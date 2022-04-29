import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PlayListItem } from '../../../shared-types';
import { PlayerService } from '../../../shared';

@Component({
  selector: 'app-course-detail-content-item',
  templateUrl: './course-detail-content-item.component.html',
})
export class CourseDetailContentItemComponent {
  @Input() item: Partial<PlayListItem> = {};
  @Output() launch: EventEmitter<number> = new EventEmitter<number>();

  // constructor(
  //   public player: PlayerService,
  //   private router: Router,
  // ) {}

  // playSource(courseId: number, sourceSeq: number) {
  //   this.player.setPlaylistSourceId(sourceSeq);
  //   const url = this.router.serializeUrl(
  //     this.router.createUrlTree(['/course/launch', courseId])
  //   );
  //   const windowFeatures = 'popup,left=100,top=100,width=920,height=920';
  //   window.open(url, '_blank', windowFeatures);
  // }
}
