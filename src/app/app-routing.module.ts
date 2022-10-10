import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginUserComponent } from './pages/user-login-profile/login-user-profile.component';

const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"home", component: HomeComponent},
  {path:"login-user", component: LoginUserComponent},
  { path: '',   redirectTo: '/login-user', pathMatch: 'full' },
  { path: '**', component: LoginUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
