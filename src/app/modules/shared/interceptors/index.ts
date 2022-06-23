import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AlertInterceptor } from './alert.interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AlertInterceptor, multi: true },
];