import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnDestroy,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { combineLatest, Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';

import {
  Course,
  PlayList,
  PlayListItem,
  PlayListSource,
  User,
} from '../../../shared-types';
import {
  AuthenticatedUserService,
  PlayerService,
  PlayListService,
  PlayListItemService,
  PlayListSourceService,
} from '../../../shared';
import {
  VideoPlayerComponent,
  MsPlayerComponent,
} from '../../../content-player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
})
export class PlayerComponent implements OnInit, OnDestroy {
  @Input() course: Partial<Course>;
  @ViewChild('contentContainer', { read: ViewContainerRef, static: true })
  contentContainer;
  private componentRef: any;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    public playerService: PlayerService,
    public sanitizer: DomSanitizer,
    private resolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    this.playerService.setPlaylistItemId(1);
    this.playerService.item$
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (item) => !item.courseWatched && this.createContent(item.source)
      );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  async createContent(sourcePlaying: Partial<PlayListSource>) {
    if (sourcePlaying) {
      let component: Type<VideoPlayerComponent | MsPlayerComponent>;

      switch (sourcePlaying && sourcePlaying.mimeType) {
        case 'video/mp4':
          {
            let comp = await import(
              '../../../content-player/components/video-player/video-player.component'
            );
            component = comp.VideoPlayerComponent;
          }
          break;
        case 'application/mspowerpoint':
          {
            let comp = await import(
              '../../../content-player/components/ms-player/ms-player.component'
            );
            component = comp.MsPlayerComponent;
          }
          break;
      }

      if (this.componentRef) {
        this.componentRef.destroy();
      }

      const factory = this.resolver.resolveComponentFactory(component);
      this.componentRef = this.contentContainer.createComponent(factory);
    }
  }
}
