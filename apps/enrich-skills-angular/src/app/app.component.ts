import { AuthenicatorService } from './core/services/authenicator.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fsoft-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'enrich-skills-angular';

  constructor(authService: AuthenicatorService, router: Router) {
    if (authService.isLoggedIn()) {
      router.navigate(['/admin/home']);
    }
  }
}
