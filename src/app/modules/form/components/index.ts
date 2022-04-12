import { ButtonComponent } from './button';
import { CheckboxComponent } from './checkbox';
import { CheckboxGroupComponent } from './checkbox-group';
import { DisplayFormComponent } from './display-form';
import { FormGroupItemComponent } from './form-group-item';
import { FormInputComponent } from './form-input';
import { FormValueRendererComponent } from './form-value-renderer';
import { RequestorInfoFormComponent } from './requestor-info-form';

export const ComponentsExport = [DisplayFormComponent, FormInputComponent];

export const Components = [
  ...ComponentsExport,
  ButtonComponent,
  CheckboxComponent,
  CheckboxGroupComponent,
  FormGroupItemComponent,
  FormValueRendererComponent,
  RequestorInfoFormComponent,
];
