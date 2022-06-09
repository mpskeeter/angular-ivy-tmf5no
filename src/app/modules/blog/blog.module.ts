import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [SharedModule],
  declarations: [...Components],
  exports: [...ComponentsExport],
})
export class BlogModule {}
