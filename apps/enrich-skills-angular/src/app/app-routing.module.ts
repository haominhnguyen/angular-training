import { AuthGuard } from './auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent, ProfileComponent, UsersComponent, NotFoundComponent, LandingPageComponent } from './admin';

export const routes: Routes = [
  {path: '', redirectTo: '/admin/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'landing', component: LandingPageComponent},
  {
    path: 'admin',
    component: AdminComponent,
    canActivate:[AuthGuard],
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'users', component: UsersComponent},
    ]
  },
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
