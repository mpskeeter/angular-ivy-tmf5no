import { FormValueRendererComponent } from './form-value-renderer';
import { FormlyButtonComponent } from './formly-button';
import { FormlyFormComponent } from './formly-form';

export const FormlyComponentsExport = [FormlyFormComponent];
export const FormlyComponents = [
  ...FormlyComponentsExport,
  FormlyButtonComponent,
  FormValueRendererComponent,
];
