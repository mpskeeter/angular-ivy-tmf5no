import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { PlayListItem } from '../../../../../shared-types';
import { PlayListItemForm, PlayListItemService } from '../../../../../shared';
import { ModalService } from '../../../../../modal';

@Component({
  selector: 'app-playlists-item-edit',
  templateUrl: './playlists-item-edit.component.html',
})
export class PlaylistsItemEditComponent implements OnInit, OnDestroy {
  form: FormGroup = this.itemForm.generate();
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private itemForm: PlayListItemForm,
    private modalService: ModalService,
    @Inject('COLUMNS') public elements: any,
    private service: PlayListItemService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.service.item$
      .pipe(takeUntil(this.destroy$))
      .subscribe((item: PlayListItem) => {
        if (!item) {
          this.form = this.itemForm.generate(null);
        } else {
          this.form.patchValue(this.itemForm.patch(item));
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
