import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared';
import { ComponentsExport, Components } from './components';
import { Directives } from './directives';

@NgModule({
  imports: [CommonModule, MatTableModule, SharedModule],
  declarations: [...Components],
  providers: [...Directives],
  exports: [...ComponentsExport],
})
export class TableModule {}
