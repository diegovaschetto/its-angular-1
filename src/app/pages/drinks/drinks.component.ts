import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from "@angular/router";
import { ApiService } from "src/app/_service/api.service";

export interface Drink {
  idDrink: string;
  strDrinkThumb: string;
  strDrink: string;
  strAlcoholic: string;
}

export interface Drinks {
  drinks: Drink[];
}

@Component({
  selector: "app-drinks",
  templateUrl: "./drinks.component.html",
  styleUrls: ["./drinks.component.scss"],
})
export class DrinksComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((res) => {
      this.letterToSearch = res.get("letter") || this.letterToSearch;
    });

    this.route.data.subscribe((response: Partial<{ letter: Drinks; random: Drinks }>) => {
      response.letter?.drinks ? (this.drinks = response.letter?.drinks) : (this.drinks.length = 0);
      this.drinks.sort((a, b) => a.strDrink.localeCompare(b.strDrink));
      !response.letter?.drinks?.length ? (this.errorNotFound = true) : (this.errorNotFound = false);
      if (response.random?.drinks) this.random = response.random?.drinks;
    });
  }

  letterToSearch = "a";
  drinks: Drink[] = [];
  random: Drink[] = [];
  alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  errorNotFound = false;
}
