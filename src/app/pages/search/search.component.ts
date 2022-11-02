import { Component, OnInit} from '@angular/core';
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

interface Ingredientlist {
    strIngredient1: string
}


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit  {
    constructor(private service: ApiService) {}

    drinks: Drink[] = [];
    ingredientList: Ingredientlist[] = []
    idDrink = '';

    jsonIn = {
        name:"",
        ingredient:""
    }
    
    ngOnInit(): void {
        this.service.searchListIngredient().subscribe((response: Partial<{ drinks: Ingredientlist[] }>)=>{
            if(response.drinks) this.ingredientList = response.drinks
        })
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
