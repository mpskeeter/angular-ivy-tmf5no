// import { FormlyFieldCheckbox } from './checkbox.type';
import { FormlyFieldInput } from './input.type';
import { FormlyFieldMultiCheckbox } from './multi-checkbox.type';
import { FormlyFieldSelect } from './select.type';

import { FormlyFieldWrapper } from './wrapper.type';
import { ContactWrapperComponent } from './contact-panel.type';

// export const Types = [FormlyFieldCheckbox, FormlyFieldInput];
export const Types = [
  FormlyFieldInput,
  FormlyFieldMultiCheckbox,
  FormlyFieldSelect,
  FormlyFieldWrapper,
];

export const Wrappers = [ContactWrapperComponent];

// export * from './checkbox.type';
export * from './input.type';
export * from './multi-checkbox.type';
export * from './select.type';
export * from './wrapper.type';

export * from './contact-panel.type';
