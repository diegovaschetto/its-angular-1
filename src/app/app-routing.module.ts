import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import DrinkComponent from './pages/drink/drink.component';
import DrinksComponent from './pages/drinks/drinks.component';
import { HomeComponent } from './pages/home/home.component';
import { IngredientComponent } from './pages/ingredient/ingredient.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchComponent } from './pages/search/search.component';
import { LoginUserComponent } from './pages/user-login-profile/login-user-profile.component';

const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"home", component: HomeComponent},
  {path:"login-user", component: LoginUserComponent},
  {path:"drinks", component: DrinksComponent},
  {path:"search", component: SearchComponent},
  {path:"drink/:idDrink", component: DrinkComponent},
  {path:"ingredient/:ingredient", component: IngredientComponent},
  { path: '',   redirectTo: 'drinks', pathMatch: 'full' },
  { path: '**', component: DrinksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
