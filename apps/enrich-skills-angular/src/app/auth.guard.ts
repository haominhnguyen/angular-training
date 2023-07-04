import { AuthenicatorService } from './core/services/authenicator.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenicatorService : AuthenicatorService
    ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ):
    Observable<boolean
    | UrlTree> | Promise<boolean
    | UrlTree> | boolean
    | UrlTree {

    // set url before user login -> using after user login will be navigate to this url
    this.authenicatorService.redirectUrl = state.url;
    if (this.authenicatorService.userToken) {
      return true;
    } else {
      return this.router.parseUrl('/login');
    }
  }

}
