import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import DrinkComponent from './pages/drink/drink.component';
import { DrinksComponent } from './pages/drinks/drinks.component';
import { HomeComponent } from './pages/home/home.component';
import { IngredientComponent } from './pages/ingredient/ingredient.component';
import { LoginComponent } from './pages/login/login.component';
import { OrderComponent } from './pages/order/order.component';
import { SearchComponent } from './pages/search/search.component';
import { LoginUserComponent } from './pages/user-login-profile/login-user-profile.component';
import { DrinkResolverById, DrinkResolverByIngredient } from './_service/resolver';

const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"home", component: HomeComponent},
  {path:"login-user", component: LoginUserComponent},
  {path:"drinks", component: DrinksComponent},
  {path:"drinks/:letter", component: DrinksComponent},
  {path:"search", component: SearchComponent},
  {path:"drink/:idDrink", component: DrinkComponent,resolve: {drink: DrinkResolverById} },
  {path:"ingredient/:ingredient", component: IngredientComponent , resolve: {ingredient: DrinkResolverByIngredient}},
  { path: '',   redirectTo: 'order', pathMatch: 'full' },
  { path: '**', component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
