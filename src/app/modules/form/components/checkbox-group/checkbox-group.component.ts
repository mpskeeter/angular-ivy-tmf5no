import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CheckboxGroupComponent,
      multi: true,
    },
  ],
})
export class CheckboxGroupComponent implements ControlValueAccessor {
  value: unknown[] = [];

  constructor() {}

  onChange = (value: unknown[]) => {};
  onTouch = () => {};

  // Allow Angular to set the value on the component
  writeValue(value: unknown[]): void {
    this.value = value || [];
  }

  // Save a reference to the change function passed to us by
  // the Angular form control
  registerOnChange(fn: (value: unknown[]) => void): void {
    this.onChange = fn;
  }

  // Save a reference to the touched function passed to us by
  // the Angular form control
  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  toggleValue(selectedValue: unknown) {
    const index = this.value.indexOf(selectedValue);

    if (index > -1) {
      this.value = [
        ...this.value.slice(0, index),
        ...this.value.slice(index + 1),
      ];
    } else {
      this.value = [...this.value, selectedValue];
    }

    this.onChange(this.value);
    this.onTouch();
  }

  isSelected(valueToCheck: unknown) {
    return this.value.indexOf(valueToCheck) >= 0;
  }
}
