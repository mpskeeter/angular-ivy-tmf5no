import { AlertComponent } from './alert';
import { CheckCircleComponent } from './check-circle';
import { ExclamationComponent } from './exclamation';
import { InformationCircleComponent } from './information-circle';
import { XCircleComponent } from './x-circle';

export const ComponentsExport = [AlertComponent];

export const Components = [
  ...ComponentsExport,
  CheckCircleComponent,
  ExclamationComponent,
  InformationCircleComponent,
  XCircleComponent,
];
