import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoMaterialModule } from './material.module';
import { LoginComponent } from './auth/login/login.component';
import { AuthenicatorService } from './core/services/authenicator.service';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { httpInterceptorProviders } from './auth/http-interceptors';
import { HomeComponent, NotFoundComponent, ProfileComponent, UsersComponent } from './admin';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    UsersComponent,
    ProfileComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [HeaderComponent, FooterComponent],
  providers: [AuthenicatorService, httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
