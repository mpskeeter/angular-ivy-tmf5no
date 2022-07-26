import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';


const ModulesExport = [
  CommonModule,
  DragDropModule,
  MatTableModule,
  MatTabsModule,
];

@NgModule({
  imports: ModulesExport,
  exports: ModulesExport,
})
export class MaterialModule {}