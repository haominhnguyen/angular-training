import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthenicatorService } from '../../core/services/authenicator.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(
    private authenicatorService : AuthenicatorService,
    private router : Router,
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
    ): Observable<HttpEvent<any>> {
      // get token to call API
      const token = this.authenicatorService.userToken;

      // Add token to header
      const cloneReq = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token,
        }
      })

      return next.handle(cloneReq).pipe(
        tap(
            () => {},
            (err) => {
              // When user login expired, navigate to login screen.
              if (err.status === 401) {
                this.router.navigateByUrl('/login');
              }
            }
        )
      );
    }
}
