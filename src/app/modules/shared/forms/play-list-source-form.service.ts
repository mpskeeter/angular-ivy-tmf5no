import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormTableElement, Source } from '../../shared-types';
import { convertDate } from './utils';

@Injectable()
export class PlayListSourceForm {
  #id: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  id$: Observable<number> = this.#id.asObservable();

  constructor(private fb: FormBuilder) {}

  parseRoute(route: ActivatedRoute) {
    route.paramMap
      .pipe(
        map((params: ParamMap) => {
          const paramId = params.get('id');
          if (!paramId) return null;
          return parseInt(paramId, 10);
        })
      )
      .subscribe((id: number) => this.#id.next(id));
  }

  generate = (record: Partial<Source> = {}): FormGroup =>
    this.fb.group({
      id: [record?.id],
      name: [record?.name],
      seq: [record?.seq],
      description: [record?.description],
      url: [record?.url],
      mimeType: [record?.mimeType],
      thumbnail: [record?.thumbnail],
      statusId: [record?.statusId],
      createdAt: [convertDate(record?.createdAt)],
      updatedAt: [convertDate(record?.updatedAt)],
      deletedAt: [convertDate(record?.deletedAt)],
      authorId: [record?.authorId],
    });

  patch = (record: Partial<Source>) => ({
    ...record,
    createdAt: convertDate(record?.createdAt),
    updatedAt: convertDate(record?.updatedAt),
    deletedAt: convertDate(record?.deletedAt),
  });

  values = (form: FormGroup): Partial<Source> => ({
    id: form.get('id').value,
    name: form.get('name').value,
    seq: parseInt(form.get('seq').value, 10),
    description: form.get('description').value,
    url: form.get('url').value,
    mimeType: form.get('mimeType').value,
    thumbnail: form.get('thumbnail').value,
    statusId: parseInt(form.get('statusId').value, 10),
    createdAt: form.get('createdAt').value,
    updatedAt: form.get('updatedAt').value,
    deletedAt: form.get('deletedAt').value,
    authorId: parseInt(form.get('authorId').value, 10),
  });
}
