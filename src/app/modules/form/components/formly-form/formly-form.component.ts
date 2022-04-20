import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formly-form',
  templateUrl: './formly-form.component.html',
})
export class FormlyFormComponent {
  @Input() fields: FormlyFieldConfig[] = [];
  @Input() model: any = {};
  @Input() options: FormlyFormOptions = {};

  @Output() formSave: EventEmitter<any> = new EventEmitter<any>();
  @Output() formCancel: EventEmitter<boolean> = new EventEmitter<boolean>();

  form = new FormGroup({});

  save() {
    this.formSave.emit(this.model);
  }

  cancel() {
    this.formCancel.emit(true);
  }
}
