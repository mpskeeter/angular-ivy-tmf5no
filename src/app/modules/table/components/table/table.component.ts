import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { FormTableElement, Pagination } from '../../../shared-types';
import { PlayListService, StatusService, UserService } from '../../../shared';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit, OnDestroy {
  @Input() columns: Partial<FormTableElement>[] = [];
  @Input() data: Partial<unknown>[] = [];

  @Input() pagination: Partial<Pagination> = {};

  @Output() add: EventEmitter<null> = new EventEmitter<null>();
  @Output() edit: EventEmitter<unknown> = new EventEmitter<unknown>();
  @Output() delete: EventEmitter<unknown> = new EventEmitter<unknown>();

  headers: Partial<FormTableElement>[] = [];

  display = (label: string): boolean =>
    this.headers.find(
      (header: Partial<FormTableElement>) => header.label === label
    ).display;

  destroy$: Subject<boolean> = new Subject<boolean>();

  #columns: BehaviorSubject<Partial<FormTableElement>[]> = new BehaviorSubject<
    Partial<FormTableElement>[]
  >(this.columns);
  columns$: Observable<Partial<FormTableElement>[]> =
    this.#columns.asObservable();

  constructor(
    private statusService: StatusService,
    private playlistService: PlayListService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.columns = this.columns.filter(
      (column: Partial<FormTableElement>) => column.tableDisplay
    );

    this.headers = [
      ...this.columns.map((column: Partial<FormTableElement>) => ({
        label: column.label,
        name: column.name,
        tableDisplay: column.tableDisplay,
        display: column.display || column.tableDisplay,
      })),
      {
        label: 'Actions',
        tableDisplay: true,
        display: true,
      },
    ];

    this.#columns.next(this.columns);

    this.checkService({
      service: this.statusService,
      columnName: 'statusId',
      fieldName: 'name',
    });

    this.checkService({
      service: this.playlistService,
      columnName: 'playlistId',
      fieldName: 'name',
    });

    this.checkService({
      service: this.userService,
      columnName: 'authorId',
      fieldName: 'name',
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  checkService({ service: checkService, columnName, fieldName }) {
    const index = this.columns?.findIndex((item) => item.name === columnName);
    if (index >= 0) {
      checkService.get();
      checkService.items$
        .pipe(
          map((items: Array<unknown>) => {
            // const index = this.columns?.findIndex(
            //   (item) => item['name'] === columnName
            // );
            if (index >= 0 && items) {
              const func = (row) => {
                const rowFound = items?.find(
                  (item) => item['id'] === row[columnName]
                );
                if (rowFound) {
                  return rowFound[fieldName];
                } else {
                  return null;
                }
              };

              this.columns[index].data = (row) => func(row);
            }
          }),
          takeUntil(this.destroy$)
        )
        .subscribe((_) => {
          this.#columns.next(this.columns);
        });
    }
  }

  editClick($event: unknown) {
    this.edit.emit($event);
  }
}
