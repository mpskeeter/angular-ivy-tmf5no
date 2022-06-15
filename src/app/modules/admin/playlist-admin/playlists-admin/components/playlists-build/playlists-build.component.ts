import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { combineLatest, Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { PlayList, Item, Source } from '../../../../../shared-types';
import { PlayListService, ItemService } from '../../../../../shared';

//https://www.freakyjolly.com/angular-material-drag-and-drop-across-multi-lists-example/

@Component({
  selector: 'app-playlists-build',
  templateUrl: './playlists-build.component.html',
  styleUrls: ['./playlists-build.component.scss'],
})
export class PlaylistsBuildComponent implements OnInit, OnDestroy {
  id: number = 0;
  selectedPlaylist: Partial<PlayList> = {};
  available: Partial<Item>[] = [];
  selected: Partial<Item>[] = [];

  showItemSources: boolean = false;
  itemSelected: Partial<Item> = {};
  sources: Partial<Source>[] = [];

  destroy$: Subject<boolean> = new Subject<boolean>();

  joinList = [];
  checkboxList = [];

  const ascBySeq = (a: Partial<Item>, b: Partial<Item>) => {
    return a.seq < b.seq ? -1 : a.seq > b.seq ? 1 : 0;
  };

  constructor(
    public playlist: PlayListService,
    public service: ItemService,
    public activeRoute: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit() {
    combineLatest([this.service.items$, this.playlist.item$])
      .pipe(
        takeUntil(this.destroy$),
        // tap(([items, playlist]) => console.log('tap:', { items, playlist })),
        map(([items, playlist]) => {
          this.selectedPlaylist = playlist;
          this.selected =
            playlist?.items?.sort(this.ascBySeq) || [];

          this.buildCheckboxList(this.selected);

          this.available = items?.filter(
            (avail) =>
              avail.statusId === 1 &&
              !this.selected?.find((rm) => rm.id === avail.id)
          );
        })
      )
      .subscribe();

    this.activeRoute.paramMap
      .pipe(
        map((params: ParamMap) => {
          const paramId = params.get('id');
          if (!paramId) return null;
          return parseInt(paramId, 10);
        })
      )
      .subscribe((id: number) => this.playlist.get(id));

    this.service.get();
  }

  buildCheckboxList(items: Partial<Item>[]) {
    this.checkboxList = items?.map((item: Partial<Item>) => ({
      id: item.id,
      value: item.name,
      isSelected: false,
    }));
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  drop(event: CdkDragDrop<Partial<Item>[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    this.selected = this.selected?.map((item: Partial<Item>, index: number) => {
      item.seq = index + 1;
      return item;
    });

    this.buildCheckboxList(this.selected);
  }

  close() {
    this.router.navigate(['/admin/playlist/playlists/list']);
  }

  save() {
    this.selected
      ?.map((item: Partial<Item>) => ({
        id: this.selectedPlaylist.playlistItems.find(
          (playlistItem: Partial<PlaylistItem>) =>
            playlistItem.playlistId === this.selectedPlaylist?.id &&
            playlistItem.itemId === item?.id
        )?.id || null,
        playlistId: this.selectedPlaylist?.id,
        playListItemId: item?.id,
        seq: item.seq,
        item,
      }))
      .map((item: Partial<PlaylistItem>) =>
        this.playlistItemService.save(item)
      );
    this.close();
  }

  showSources(item: Partial<Item>) {
    this.itemSelected =
      this.checkboxList.find(
        (listItem) => !listItem.isSelected && listItem.value === item?.name
      ) || false
        ? item
        : null;

    this.checkboxList.map((listItem) => {
      const selected = this.itemSelected?.name
        ? listItem.value === this.itemSelected?.name
        : false;

      listItem.isSelected = selected;
    });

    this.showItemSources =
      this.checkboxList.find((listItem) => listItem.isSelected) !== undefined;
  }
}
