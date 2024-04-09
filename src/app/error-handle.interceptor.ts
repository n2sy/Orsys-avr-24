import {
  HttpErrorResponse,
  HttpInterceptorFn,
  HttpStatusCode,
} from '@angular/common/http';
import { ErrorHandler, inject } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

export const errorHandleInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Error interceptor');
  const err = inject(ErrorHandler);
  const router = inject(Router);

  return next(req).pipe(
    tap({
      error: (errorResponse: HttpErrorResponse) => {
        if (errorResponse.status == HttpStatusCode.Unauthorized) {
          console.log('Traitement de errorInterceptor');

          router.navigateByUrl('/login');
        } else {
          console.log('Traitement secondaire de errorInterceptor');
          console.log(errorResponse.error['message']);

          err.handleError(errorResponse);
        }
      },
    })
  );
};
