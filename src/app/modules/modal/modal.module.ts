import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';

import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [CommonModule, SharedModule],
  exports: [...ComponentsExport],
  declarations: [...Components],
})
export class ModalModule {}
