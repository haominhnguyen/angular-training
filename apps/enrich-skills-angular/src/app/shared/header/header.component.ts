import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserResponse } from '../../core/model/user.model';
import { AuthenicatorService } from '../../core/services/authenicator.service';

@Component({
  selector: 'fsoft-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  checkNotLoginUser : boolean;
  userLogin : string;
  responseData : UserResponse;

  constructor(
    private router : Router,
    private authenService : AuthenicatorService
  ) { }

  ngOnInit(): void {
    // get user in session login
    this.getProfile();
  }

  /**
   * Notification when user using function in develop time.
   */
  developingNotification() {
    alert('This function coming soon!!!')
  }

  /**
   * For user logout action.
   */
  logout() {
    this.authenService.logout();
    this.router.navigate(['/landing'])
  }

  /**
   * Get user profile with token login.
   */
  getProfile() {
    this.authenService.getProfileLogin().subscribe(
      responseData => {
        this.userLogin = responseData.username;
      }
    );
  }
}
