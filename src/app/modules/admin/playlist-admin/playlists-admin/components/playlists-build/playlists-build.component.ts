import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
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
  available: Partial<PlayListItem>[] = [];
  selected: Partial<PlayListItem>[] = [];

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    public playlist: PlayListService,
    public service: PlayListItemService,
    public activeRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    // this.service.items$
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((items: Partial<PlayListItem>[]) => (this.available = items));
    // this.playlist.item$
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((item: Partial<PlayList>) => (this.selected = item.items));

    combineLatest([this.service.items$, this.playlist.item$])
      .pipe(
        takeUntil(this.destroy$),
        tap(([items, playlist]) => console.log('tap:', { items, playlist })),
        map(([items, playlist]) => {
          this.selected = playlist.items;

          this.available = items?.filter(
            (avail) => !this.selected.find((rm) => rm.name === avail.name),
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

    console.log('selected:', this.selected);
  }
}
