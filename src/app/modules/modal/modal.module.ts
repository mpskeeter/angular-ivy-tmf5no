import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [CommonModule],
  exports: [...ComponentsExport],
  declarations: [...Components],
})
export class ModalModule {}
