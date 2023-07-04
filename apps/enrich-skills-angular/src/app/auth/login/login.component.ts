import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { AuthenicatorService } from '../../core/services/authenicator.service';

@Component({
  selector: 'fsoft-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;

  constructor(
    private authenService: AuthenicatorService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        username : new FormControl('',[
          Validators.required
        ]),
        password : new FormControl('', [
          Validators.required,
          Validators.minLength(4)
        ])
      }
    )
  }

  /**
   * Login function
   * @returns user login
   */
  onLogin() {
    if (this.loginForm.invalid) {
      return;
    }

    console.log(this.authenService.redirectUrl);
    this.authenService.login(this.loginForm.value).pipe(
      map(() =>
        this.router.navigateByUrl(this.authenService.redirectUrl))
    ).subscribe();
  }

}
