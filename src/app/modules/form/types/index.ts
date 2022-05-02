import { FormlyFieldFile } from './file.type';
import { FormlyFieldInput } from './input.type';
import { FormlyFieldMultiCheckbox } from './multi-checkbox.type';
import { FormlyFieldSelect } from './select.type';
import { FormlyFieldTextArea } from './textarea.type';
import { FormlyFieldWrapper } from './wrapper.type';
import { ContactWrapperComponent } from './contact-panel.type';

export const Types = [
  FormlyFieldFile,
  FormlyFieldInput,
  FormlyFieldMultiCheckbox,
  FormlyFieldSelect,
  FormlyFieldTextArea,
  FormlyFieldWrapper,
];

export const Wrappers = [ContactWrapperComponent];

export const Directives = [FileValueAccessor];

export * from './file.type';
export * from './input.type';
export * from './multi-checkbox.type';
export * from './select.type';
export * from './textarea.type';
export * from './wrapper.type';

export * from './contact-panel.type';

export * from './validation.type';

export * from './file-value-accessor';
