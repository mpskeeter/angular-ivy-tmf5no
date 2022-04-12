import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { PlayList } from '../../../../../shared-types';
import { PlayListForm, PlayListService } from '../../../../../shared';

@Component({
  selector: 'app-playlists-admin',
  templateUrl: './playlists-admin.component.html',
})
export class PlaylistsAdminComponent implements OnInit, OnDestroy {
  form: FormGroup;
  destroy$: Subject<boolean> = new Subject<boolean>();

  id: number = 0;

  constructor(
    private playlistForm: PlayListForm,
    @Inject('COLUMNS') public elements: any,
    private service: PlayListService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.form = this.playlistForm.generate();

    this.playlistForm.parseRoute(this.route);

    this.playlistForm.id$.subscribe((id: number) => {
      this.id = id;
      id ? this.service.get(id) : this.service.blank();
    });

    this.service.item$
      .pipe(takeUntil(this.destroy$))
      .subscribe((item: PlayList) =>
        this.form.patchValue(this.playlistForm.patch(item)),
      );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  save(form: FormGroup) {
    this.service.save(this.playlistForm.values(form));
    this.router.navigate(['/admin/playlist/list']);
  }

  manageItems() {
    this.router.navigate(['/admin/playlist/buildItems', this.id]);
  }
}
