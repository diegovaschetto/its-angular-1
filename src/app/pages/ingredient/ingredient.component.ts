import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";


export interface Drinks {
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
  

  constructor(private route: ActivatedRoute) {}
  segmentUrl: string = "";
  drinks: Drink[] = [];
  
  ngOnInit() {
    this.route.data
      .subscribe((response: Partial<{ingredient:Drinks}>) => {
      if (response.ingredient?.drinks) this.drinks = response.ingredient?.drinks;
    });
  }
}
