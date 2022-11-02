import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/_service/api.service";
import { __param } from "tslib";


interface Drinks {
  drinks: Drink[]
}

interface Drink {
  strDrink: string
  strDrinkThumb: string 
  idDrink: string 
}

@Component({
  selector: "app-ingredient",
  templateUrl: "./ingredient.component.html",
})
export class IngredientComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service: ApiService) {}
  segmentUrl: string = "";
  drinks: Drink[] = [];

  ngOnInit() {
    this.route.paramMap.
      subscribe((param) => {this.segmentUrl = param.get("ingredient")!});
    this.service
      .searchCocktailByIngredient(this.segmentUrl)
      .subscribe((response: Partial<Drinks>) => {
      if (response.drinks) this.drinks = response.drinks;
    });
  }
}
