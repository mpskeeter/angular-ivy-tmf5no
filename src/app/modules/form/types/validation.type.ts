import { FormControl, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

export function minlengthValidationMessage(err, field) {
  return `Should have atleast ${field.templateOptions.minLength} characters`;
}

export function maxlengthValidationMessage(err, field) {
  return `This value should be less than ${field.templateOptions.maxLength} characters`;
}

export function minValidationMessage(err, field) {
  return `This value should be more than ${field.templateOptions.min}`;
}

export function maxValidationMessage(err, field) {
  return `This value should be less than ${field.templateOptions.max}`;
}

export function IpValidator(control: FormControl): ValidationErrors {
  return !control.value || /(\d{1,3}\.){3}\d{1,3}/.test(control.value) ? null : { 'ip': true };
}

export function IpValidatorMessage(err, field: FormlyFieldConfig) {
  return `"${field.formControl.value}" is not a valid IP Address`;
}

export function dateFutureValidator(
  control: FormControl,
  field: FormlyFieldConfig,
  options = {},
): ValidationErrors {
  return {
    'date-future': { message: `Validator options: ${JSON.stringify(options)}` },
  };
}

export const Validations = [
  { name: 'required', message: 'This field is required' },
  { name: 'minlength', message: minlengthValidationMessage },
  { name: 'maxlength', message: maxlengthValidationMessage },
  { name: 'min', message: minValidationMessage },
  { name: 'max', message: maxValidationMessage },
];

export const Validators = [
  {
    name: 'date-future',
    validation: dateFutureValidator,
    options: { days: 2 },
  },
];
