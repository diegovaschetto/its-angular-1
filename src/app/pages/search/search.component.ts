import { Component} from '@angular/core';
import { ApiService } from 'src/app/_service/api.service';


interface Drink {
    idDrink: string;
    strDrinkThumb: string;
    strDrink: string;
    strAlcoholic: string;
}


interface Drinks {
    drinks: Drink[];
}


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
})
export class SearchComponent  {
    constructor(private service: ApiService) {}

    drinks: Drink[] = [];
    idDrink = '';
    jsonIn = {
        name:"",
        ingredient:""
    }
    

    searchCocktailByName = () => {
            this.service.searchCocktailByName(this.jsonIn.name).subscribe((response: Partial<Drinks>) => {
                if (response.drinks) this.drinks = response.drinks;
            });
    };

    searchCocktailByIngredient = () => {

            this.service.searchCocktailByIngredient(this.jsonIn.ingredient).subscribe((response: Partial<Drinks>) => {
                console.log(response);
                if (response.drinks) this.drinks = response.drinks;
            });
    };
}
