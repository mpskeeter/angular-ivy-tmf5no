import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { combineLatest, Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { Item, Source, ItemSource } from '../../../../../shared-types';
import { ItemSourceService, SourceService } from '../../../../../shared';

@Component({
  selector: 'app-playlists-build-sources',
  templateUrl: './playlists-build-sources.component.html',
})
export class PlaylistsBuildSourcesComponent implements OnInit, OnDestroy {
  @Input() itemId: number = 0;
  @Input() selected: Partial<Source>[] = [];
  @Output() completed: EventEmitter<boolean> = new EventEmitter<boolean>();

  items: Partial<Source>[] = [];
  available: Partial<Source>[] = [];

  destroy$: Subject<boolean> = new Subject<boolean>();

  ascBySeq = (a: Partial<Source>, b: Partial<Source>): number => {
    return a.seq > b.seq ? 1 : a.seq < b.seq ? -1 : 0;
  };

  constructor(
    public service: SourceService,
    public itemSourceService: ItemSourceService
  ) {}

  ngOnInit() {
    combineLatest([this.service.items$, this.itemSourceService.items$])
      .pipe(
        map(([items, itemSources]) => {
          this.items = itemSources?.filter(
            (itemSource: Partial<ItemSource>) =>
              itemSource.itemId === this.itemId
          );
          this.selected = this.selected.sort(this.ascBySeq) || [];

          this.available = items?.filter(
            (avail) =>
              avail.statusId === 1 &&
              !this.selected?.find((rm) => rm.id === avail.id)
          );
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.service.get();
    this.itemSourceService.get();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  drop(event: CdkDragDrop<Partial<Source>[]>) {
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

    this.selected = this.selected?.map(
      (item: Partial<Source>, index: number) => {
        item.seq = index + 1;
        return item;
      }
    );
  }

  save() {
    // Delete itemSources that have been removed
    this.items.map((itemSource: Partial<ItemSource>) => {
      const found = this.selected.find(
        (item: Partial<Source>) => item.id === itemSource.sourceId
      );
      if (!found) {
        this.itemSourceService.remove(itemSource);
      }
    });

    // Save/Update itemSources
    this.selected
      ?.map((item: Partial<Source>) => ({
        id:
          this.items.find(
            (itemSource: Partial<ItemSource>) =>
              itemSource.itemId === this.itemId &&
              itemSource.sourceId === item?.id
          )?.id || null,
        itemId: this.itemId,
        sourceId: item.id,
        seq: item.seq,
        // source: item,
      }))
      .map((item: Partial<ItemSource>) => {
        this.itemSourceService.save(item);
      });

    this.close();
  }

  close() {
    this.completed.emit(true);
  }
}
