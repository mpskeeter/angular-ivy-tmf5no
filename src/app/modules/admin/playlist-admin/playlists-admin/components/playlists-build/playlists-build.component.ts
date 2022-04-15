import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { combineLatest, Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { PlayList, PlayListItem } from '../../../../../shared-types';
import { PlayListService, PlayListItemService } from '../../../../../shared';

//https://www.freakyjolly.com/angular-material-drag-and-drop-across-multi-lists-example/

@Component({
  selector: 'app-playlists-build',
  templateUrl: './playlists-build.component.html',
  styleUrls: ['./playlists-build.component.scss'],
})
export class PlaylistsBuildComponent implements OnInit, OnDestroy {
  id: number = 0;
  selectedPlaylist: Partial<PlayList> = {};
  available: Partial<PlayListItem>[] = [];
  selected: Partial<PlayListItem>[] = [];

  destroy$: Subject<boolean> = new Subject<boolean>();

  joinList = [];

  constructor(
    public playlist: PlayListService,
    public service: PlayListItemService,
    public activeRoute: ActivatedRoute,
    public router: Router,
  ) {}

  ngOnInit() {
    combineLatest([this.service.items$, this.playlist.item$])
      .pipe(
        takeUntil(this.destroy$),
        // tap(([items, playlist]) => console.log('tap:', { items, playlist })),
        map(([items, playlist]) => {
          this.selectedPlaylist = playlist;
          this.selected = playlist?.items.sort(
            (a: Partial<PlayListItem>, b: Partial<PlayListItem>) => {
              return a.seq < b.seq ? -1 : a.seq > b.seq ? 1 : 0;
            },
          );

          this.available = items?.filter(
            (avail) =>
              avail.statusId === 1 &&
              !this.selected?.find(
                (rm) => rm.name === avail.name && rm.sources === avail.sources,
              ),
          );
        }),
      )
      .subscribe();

    this.activeRoute.paramMap
      .pipe(
        map((params: ParamMap) => {
          const paramId = params.get('id');
          if (!paramId) return null;
          return parseInt(paramId, 10);
        }),
      )
      .subscribe((id: number) => this.playlist.get(id));

    this.service.get();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  drop(event: CdkDragDrop<Partial<PlayListItem>[]>) {
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

    this.selected = this.selected.map(
      (item: Partial<PlayListItem>, index: number) => {
        item.seq = index + 1;
        return item;
      },
    );

    this.joinList = this.selected.map((item: Partial<PlayListItem>) => {
      return {
        playlistId: this.selectedPlaylist.id,
        playListItemId: item.id,
        seq: item.seq,
      };
    });
  }

  close() {
    this.router.navigate(['/admin/playlist/playlists/list']);
  }

  save() {
    this.playlist.save({ ...this.selectedPlaylist, items: this.selected });
    this.close();
  }
}
