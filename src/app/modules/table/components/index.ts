import { ButtonAddComponent } from './button-add';
import { ButtonEditComponent } from './button-edit';
import { ButtonDeleteComponent } from './button-delete';
import { ColumnSelectorComponent } from './column-selector';
import { ColumnSelectorItemComponent } from './column-selector-item';
import { DropdownMenuComponent } from './dropdown-menu';
import { PaginationComponent } from './pagination';
import { TableComponent } from './table';
import { TableHeaderComponent } from './table-header';

export const ComponentsExport = [TableComponent];

export const Components = [
  ...ComponentsExport,
  ButtonAddComponent,
  ButtonEditComponent,
  ButtonDeleteComponent,
  ColumnSelectorComponent,
  ColumnSelectorItemComponent,
  DropdownMenuComponent,
  PaginationComponent,
  TableHeaderComponent,
];
