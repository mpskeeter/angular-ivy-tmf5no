import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Components, ExportComponents } from './components';

@NgModule({
    imports: [CommonModule],
    exports: [...ExportComponents],
    declarations: [...Components],
})
export class AlertModule { }