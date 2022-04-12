import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { PlayListItem } from '../../../../../shared-types';
import { PlayListService, PlayListItemService } from '../../../../../shared';

//https://www.freakyjolly.com/angular-material-drag-and-drop-across-multi-lists-example/

@Component({
  selector: 'app-playlists-build',
  templateUrl: './playlists-build.component.html',
})
export class PlaylistsBuildComponent implements OnInit {
  available: Partial<PlayListItem>[] = [];
  selected: Partial<PlayListItem>[] = [];
  constructor(
    public service: PlayListItemService,
    public playlist: PlayListService,
  ) {}

  ngOnInit() {
    this.service.items$.subscribe((items) => (this.available = items));
    this.playlist.item$.subscribe((item) => (this.selected = item.items));
  }

  drop(event: CdkDragDrop<PlayListItem[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
