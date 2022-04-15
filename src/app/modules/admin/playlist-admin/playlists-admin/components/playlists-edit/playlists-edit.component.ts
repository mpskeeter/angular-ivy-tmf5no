import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { PlayList } from '../../../../../shared-types';
import { PlayListForm, PlayListService } from '../../../../../shared';
import { ModalService } from '../../../../../modal';

@Component({
  selector: 'app-playlists-edit',
  templateUrl: './playlists-edit.component.html',
})
export class PlaylistsEditComponent implements OnInit, OnDestroy {
  form: FormGroup = this.playlistForm.generate();
  destroy$: Subject<boolean> = new Subject<boolean>();

  id: number = 0;

  constructor(
    private playlistForm: PlayListForm,
    private modalService: ModalService,
    @Inject('COLUMNS') public elements: any,
    private service: PlayListService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.service.item$
      .pipe(takeUntil(this.destroy$))
      .subscribe((item: PlayList) => {
        if (!item) {
          this.form = this.playlistForm.generate(null);
        } else {
          this.form.patchValue(this.playlistForm.patch(item));
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

  manageItems() {
    this.router.navigate(['/admin/playlist/playlists/buildItems', this.id]);
  }
}
