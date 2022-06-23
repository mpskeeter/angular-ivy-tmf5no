import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, } from 'rxjs/operators';
import { AlertService } from '../services';

@Injectable()
export class AlertInterceptor implements HttpInterceptor {

  constructor(private alert: AlertService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap(e => {
        if (request.method == "POST" || request.method == "PUT")
          if (e instanceof HttpResponse && e.status == 200) {
            this.alert.success('Saved successfully.');
          }
      }),
      catchError(error => {
        this.alert.error(`Error: ${error.message}`);
        return throwError(error);
      })
    );
  }
}