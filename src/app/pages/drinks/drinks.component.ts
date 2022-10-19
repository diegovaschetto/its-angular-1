import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    selector: 'app-drinks',
    templateUrl: './drinks.component.html',
    styleUrls: ['./drinks.component.scss'],
})
class DrinksComponent  {
    constructor(private httpClient: HttpClient) {}

    drinks: Drink[] = [];
    idDrink: string = '';
    userSearch: string = ""


    searchCocktail = () => {
        const URL =
            'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + this.userSearch;
        this.httpClient
            .get(URL) //metodo get ha un solo parametro che è url, in modello restFul, restituisce un'observable => prevedono possibilità di averer più valori e viene gestito con subscribe() che sarebbe come iscriversi ad una nuova newsletter e stare in ascolto per tutte volte che viene rilasciata una nuova newsletter
            .subscribe((response: Partial<Drinks>) => {
                if (response.drinks) this.drinks = response.drinks;
            });
    };
}

export default DrinksComponent;
