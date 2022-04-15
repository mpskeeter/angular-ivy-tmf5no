import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { PlayListSource } from '../../../../../shared-types';
import {
  PlayListSourceForm,
  PlayListSourceService,
} from '../../../../../shared';
import { ModalService } from '../../../../../modal';

@Component({
  selector: 'app-playlists-source-edit',
  templateUrl: './playlists-source-edit.component.html',
})
export class PlaylistsSourceEditComponent implements OnInit, OnDestroy {
  form: FormGroup = this.playlistSourceForm.generate();
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private playlistSourceForm: PlayListSourceForm,
    private modalService: ModalService,
    private service: PlayListSourceService,
    private route: ActivatedRoute,
    private router: Router,
    @Inject('COLUMNS') public elements: any,
  ) {}

  ngOnInit() {
    this.service.item$
      .pipe(takeUntil(this.destroy$))
      .subscribe((item: PlayListSource) => {
        if (!item) {
          this.form = this.playlistSourceForm.generate(null);
        } else {
          this.form.patchValue(this.playlistSourceForm.patch(item));
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  close() {
    this.modalService.close();
  }

  save(form: FormGroup) {
    this.service.save(form.value);
    this.close();
  }
}
