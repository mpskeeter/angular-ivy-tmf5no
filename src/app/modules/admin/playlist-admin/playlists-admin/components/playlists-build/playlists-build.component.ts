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

  @ViewChildren('checkboxes') checkboxes: QueryList<ElementRef>;

  showItemSources: boolean = false;
  itemSelected: Partial<Item> = {};
  sources: Partial<Source>[] = [];

  destroy$: Subject<boolean> = new Subject<boolean>();

  joinList = [];

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
            playlist?.items?.sort((a: Partial<Item>, b: Partial<Item>) => {
              return a.seq < b.seq ? -1 : a.seq > b.seq ? 1 : 0;
            }) || [];

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

    this.joinList = this.selected?.map((item: Partial<Item>) => {
      return {
        playlistId: this.selectedPlaylist?.id,
        playListItemId: item?.id,
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

  showSources(item: Partial<Item>) {
    console.log('item:', item);
    this.checkboxes.forEach((element) => {
      if (
        element.nativeElement.checked &&
        element.nativeElement.attributes.value !== item.name
      ) {
        element.nativeElement.checked = false;
      }
    });

    this.showItemSources = !this.showItemSources;

    this.itemSelected = this.showItemSources ? item : null;
    console.log('this.itemSelected:', this.itemSelected);
  }
}
