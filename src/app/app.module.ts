import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginUserComponent } from './pages/user-login-profile/login-user-profile.component';
import DrinkComponent from './pages/drink/drink.component';
import { SearchComponent } from './pages/search/search.component';
import { IngredientComponent } from './pages/ingredient/ingredient.component';
import { OrderComponent } from './pages/order/order.component';
import { DrinkCustomComponent } from './pages/custom-drink/drink-custom.component';
import { ListCustomComponent } from './pages/custom-list/list-custom.component';
import { DrinksComponent } from './pages/drinks/drinks.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LoginUserComponent,
    DrinkComponent,
    SearchComponent,
    IngredientComponent,
    OrderComponent,
    DrinkCustomComponent,
    ListCustomComponent,
    DrinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
