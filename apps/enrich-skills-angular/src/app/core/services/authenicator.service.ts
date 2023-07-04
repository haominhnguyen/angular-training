import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LoginForm } from '../model/login.model';
import { UserResponse } from '../model/user.model';

export interface ResponseLogin {
  userInfo : UserInfo;
  access_token : string;
}

export interface UserInfo {
  username : string;
  password : string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenicatorService {
  userName : string;
  userToken = '';
  redirectUrl = '/admin/profile';
  apiUrl = 'http://localhost:3333/api/';
  dataOutput : UserResponse;

  constructor(private http: HttpClient) {
    this.userToken = window.sessionStorage.getItem('access_token')
  }

  /**
   * Login function
   * @param loginForm input data login from screen
   * @returns user login
   */
  login(loginForm : LoginForm) {
    return this.http.post<any>(this.apiUrl + 'login', {username: loginForm.username, password: loginForm.password})
      .pipe(
        map((token : ResponseLogin) => {
          this.setToken(token)
          return token;
        }),
        catchError(err => {
          alert('Invalid username or password');
          return throwError(err);
      }),
    )
  }

  /**
   * Set token to session storage for using guard authen to call next api with authen token
   */
  setToken(token: ResponseLogin) {
    this.userToken = token.access_token;
    window.sessionStorage.setItem('access_token', token.access_token)
  }

  /**
   * Check user login status
   * @returns status login of user
   */
  isLoggedIn() {
    return this.userToken !== null;
  }

  /**
   * Clear session to logout
   */
  logout() {
    window.sessionStorage.setItem('access_token', '')
  }

  /**
   * Get All user with token login
   * @returns List user from server
   */
  getAllUser() : Observable<any>{
    return this.http.get<any>(this.apiUrl + 'users');
  }

  /**
   * Get user login in present.
   * @returns UserResponse this user login
   */
  getProfileLogin() : Observable<UserResponse> {
    return this.http.get<UserResponse>(this.apiUrl + 'profile');
  }
}
