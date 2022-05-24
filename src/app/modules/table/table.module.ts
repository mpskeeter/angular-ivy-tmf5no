import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';
import { ComponentsExport, Components } from './components';
import { Directives } from './directives';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [...Components],
  providers: [...Directives],
  exports: [...ComponentsExport],
})
export class TableModule {}
