import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { Components, ComponentsExport } from './components';
import { Pipes } from './pipes';
import { Directives } from './directives';

export const ModulesExport = [
  CommonModule,
  RouterModule,
  HttpClientModule,
  DragDropModule,
];

@NgModule({
  imports: [...ModulesExport],
  declarations: [...Components, ...Pipes, ...Directives],
  exports: [...ModulesExport, ...ComponentsExport, ...Pipes, ...Directives],
})
export class SharedModule {}
