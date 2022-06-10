import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from '../../shared-types';
import { convertDate } from './utils';

@Injectable()
export class ItemForm {
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

  generate = (record: Partial<Item> = {}): FormGroup =>
    this.fb.group({
      id: [record?.id],
      name: [record?.name],
      seq: [record?.seq],
      description: [record?.description],
      statusId: [record?.statusId],
      createdAt: [convertDate(record?.createdAt)],
      updatedAt: [convertDate(record?.updatedAt)],
      deletedAt: [convertDate(record?.deletedAt)],
      authorId: [record?.authorId],
      duration: [record?.duration],
      watched: [record?.watched],
    });

  patch = (record: Partial<Item>) => ({
    ...record,
    createdAt: convertDate(record?.createdAt),
    updatedAt: convertDate(record?.updatedAt),
    deletedAt: convertDate(record?.deletedAt),
  });

  values = (form: FormGroup): Partial<Item> => ({
    id: form.get('id').value,
    name: form.get('name').value,
    seq: parseInt(form.get('seq').value, 10),
    description: form.get('description').value,
    statusId: parseInt(form.get('statusId').value, 10),
    createdAt: form.get('createdAt').value,
    updatedAt: form.get('updatedAt').value,
    deletedAt: form.get('deletedAt').value,
    authorId: parseInt(form.get('authorId').value, 10),
    duration: form.get('duration').value,
    watched: form.get('watched').value,
  });
}
