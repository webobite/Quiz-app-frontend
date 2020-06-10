import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { UserRegisterComponent } from './component/user-register/user-register.component';
import { MyProfileComponent } from './component/my-profile/my-profile.component';


const routes: Routes = [
  {
    path :"", component : HomeComponent
  },
  {
    path : 'login', component : UserLoginComponent
  },
  {
    path : 'register', component : UserRegisterComponent
  },
  {
    path : 'profile', component : MyProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
