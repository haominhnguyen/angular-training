import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './auth-interceptors';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
];
