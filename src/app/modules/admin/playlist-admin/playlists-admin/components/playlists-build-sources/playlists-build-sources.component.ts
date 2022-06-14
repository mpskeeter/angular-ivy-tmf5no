import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Item, Source } from '../../../../../shared-types';
import { SourceService } from '../../../../../shared';

@Component({
  selector: 'app-playlists-build-sources',
  templateUrl: './playlists-build-sources.component.html',
})
export class PlaylistsBuildSourcesComponent implements OnInit, OnDestroy {
  @Input() itemId: number = 0;
  @Input() selected: Partial<Source> = [];
  @Output() completed: EventEmitter<boolean> = new EventEmitter<boolean>();

  available: Partial<Source>[] = [];

  destroy$: Subject<boolean> = new Subject<boolean>();

  joinList = [];
  checkboxList = [];

  constructor(
    public service: SourceService,
  ) {}

  ngOnInit() {
    this.service.items$
      .pipe(
        takeUntil(this.destroy$),
        // tap(([items, playlist]) => console.log('tap:', { items, playlist })),
        map((items) => {
          this.selected =
            this.selected?.sort((a: Partial<Item>, b: Partial<Item>) => {
              return a.seq < b.seq ? -1 : a.seq > b.seq ? 1 : 0;
            }) || [];

          this.buildCheckboxList(this.selected);

          this.available = items?.filter(
            (avail) =>
              avail.statusId === 1 &&
              !this.selected?.find((rm) => rm.id === avail.id)
          );
        })
      )
      .subscribe();

    this.service.get();
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

    this.selected = this.selected?.map((item: Partial<Source>, index: number) => {
      item.seq = index + 1;
      return item;
    });

    this.joinList = this.selected?.map((item: Partial<Source>) => {
      return {
        itemId: this.itemId,
        sourceId: item.id,
        seq: item.seq,
      };
    });
  }

  save() {
    this.service.save({ ...this.selectedPlaylist, items: this.selected });
    this.close();
  }
}