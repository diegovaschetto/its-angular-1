import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SubLoginComponent } from './pages/sub/sub.component';

const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"login/sub", component: SubLoginComponent},
  {path:"home", component: HomeComponent},
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
