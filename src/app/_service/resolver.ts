import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { ApiService } from "./api.service";
import { DrinkApi } from "../pages/drink/drink.component";
import { Drinks } from "../pages/ingredient/ingredient.component";

@Injectable({ providedIn: 'root' })
export class DrinkResolverById implements Resolve<Partial<{drink:DrinkApi}>> {
  constructor(private service: ApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
  ) {
    return this.service.searchCocktailById(route.paramMap.get('idDrink')!);
  }
}

@Injectable({ providedIn: 'root' })
export class DrinkResolverByIngredient implements Resolve<Partial<Drinks>> {
  constructor(private service: ApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
  ) {
    return this.service.searchCocktailByIngredient(route.paramMap.get('ingredient')!);
  }
}

@Injectable({ providedIn: 'root' })
export class DrinkResolverByLetter implements Resolve<Partial<Drinks>> {
  constructor(private service: ApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
  ) {
    return this.service.searchCocktailByFirstLetter(route.paramMap.get('letter')!);
  }
}

@Injectable({ providedIn: 'root' })
export class DrinkResolverRandom implements Resolve<Partial<Drinks>> {
  constructor(private service: ApiService) {}

  resolve() {
    return this.service.searchCocktailRandom();
  }
}