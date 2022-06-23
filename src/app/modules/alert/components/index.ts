import { AlertComponent } from './alert';
import { CheckCircleComponent } from './check-circle';
import { ExclamationComponent } from './exclamation';
import { InformationCircleComponent } from './information-circle';
import { XCircleComponent } from './x-circle';

export const ExportComponents = [AlertComponent];

export const Components = [
  ...ExportComponents,
  CheckCircleComponent,
  ExclamationComponent,
  InformationCircleComponent,
  XCircleComponent,
];
