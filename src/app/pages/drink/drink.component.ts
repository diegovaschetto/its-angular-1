import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface DrinkProp extends Record<string, any> {
    idDrink: string;
    strDrink: string;
    strInstructionsIT: string;
    strDrinkThumb: string;
}

export interface DrinkApi {
    drinks: DrinkProp[];
}

interface IngredientAndMeasure {
    name: string
    measure : string
}

@Component({
    selector: 'app-drink',
    templateUrl: './drink.component.html',
    styleUrls: ['./drink.component.scss'],
})
class DrinkComponent implements OnInit {
    constructor(private http: HttpClient, private route: ActivatedRoute) {}

    ingredientsList: IngredientAndMeasure[] = [];
    drink : DrinkProp | any
    lang="EN"

    ngOnInit(): void {

        this.route.data
            .subscribe((response: Partial<{drink:DrinkApi}>) => {
                this.drink = response.drink?.drinks![0];
                this.ingredients();
            });
    }

    ingredients = () => {
        for (const prop in this.drink) {
            if (prop.includes('strIngredient') && this.drink[prop]) {
                let index = prop.slice(prop.length - 1);
                let ingredientAndMeasure = {
                    name: this.drink[prop],
                    measure: this.drink['strMeasure' + index]
                };
                
                this.ingredientsList.push(ingredientAndMeasure)
            }

        }
       
    }

   regExpSearch=(name:string) => {
    return name.replace(/\s/g,'_').toLowerCase()
   }
}

export default DrinkComponent;
