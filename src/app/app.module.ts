import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { HomeComponent } from './component/home/home.component';
import { UserRegisterComponent } from './component/user-register/user-register.component';
import { MyProfileComponent } from './component/my-profile/my-profile.component';
import { ScoreTableComponent } from './component/score-table/score-table.component';
import { StudentDashboardComponent } from './component/student-dashboard/student-dashboard.component';
import { TeacherDashboardComponent } from './component/teacher-dashboard/teacher-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserLoginComponent,
    HomeComponent,
    UserRegisterComponent,
    MyProfileComponent,
    ScoreTableComponent,
    StudentDashboardComponent,
    TeacherDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
