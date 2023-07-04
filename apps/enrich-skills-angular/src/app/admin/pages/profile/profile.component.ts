import { Component, OnInit } from '@angular/core';
import { UserResponse } from '../../../core/model/user.model';
import { AuthenicatorService } from '../../../core/services/authenicator.service';


@Component({
  selector: 'fsoft-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  borderradius : string;
  dataOutput : UserResponse;

  constructor(
    private authenService : AuthenicatorService
  ) { }

  ngOnInit(): void {
    this.getProfile();
  }

  /**
   * Get profile user login in this session.
   */
  getProfile() {
    this.authenService.getProfileLogin().subscribe(
      responseData => {
        this.dataOutput = responseData;
      }
    );
  }
}
