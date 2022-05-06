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
  PlayList,
  PlayListItem,
  PlayListSource,
  User,
} from '../../../shared-types';
import {
  CourseService,
  ContentPlayerService,
  PlayerService,
} from '../../../shared';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
})
export class PlayerComponent implements OnInit, OnDestroy {
  @Input() courseId: number;
  @Input() sourceSeq: number;

  @ViewChild('contentContainer', { read: ViewContainerRef, static: true })
  contentContainer;

  private componentRef: any;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private courseService: CourseService,
    public playerService: PlayerService,
    private contentPlayerService: ContentPlayerService,
    public sanitizer: DomSanitizer,
    private resolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    // console.log('inputs:', {
    //   courseId: this.courseId,
    //   sourceSeq: this.sourceSeq,
    // });
    // console.log();
    this.courseService.get(this.courseId);
    this.playerService.setSourceId(this.sourceSeq);

    this.playerService.item$
      .pipe(
        map((item) => {
          // console.log('player:item:', item);
          item.source.id <= item.maxSequence && this.createContent(item.source);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  async createContent(sourcePlaying: Partial<PlayListSource>) {
    if (sourcePlaying) {
      this.contentPlayerService
        .getPlayer(sourcePlaying && sourcePlaying?.mimeType)
        .then(
          (component: Type<unknown>) => {
            if (this.componentRef) {
              this.componentRef.destroy();
            }
            this.componentRef = this.contentContainer.createComponent(
              this.resolver.resolveComponentFactory(component)
            );
          },
          (error) => alert(error)
        );
    }
  }
}
