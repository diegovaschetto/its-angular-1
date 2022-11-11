import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private httpClient: HttpClient) { }

    searchCocktailByFirstLetter(userSearch: string) {
        const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + userSearch;
        return this.httpClient.get(URL)  //metodo get ha un solo parametro che è url, in modello restFul, restituisce un'observable => prevedono possibilità di averer più valori e viene gestito con subscribe() che sarebbe come iscriversi ad una nuova newsletter e stare in ascolto per tutte volte che viene rilasciata una nuova newsletter
    }

    searchCocktailById(id:string){
        const URL= 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id;
        return this.httpClient.get(URL)
    }

    searchCocktailByName(name: string) {
        const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name;
        return this.httpClient.get(URL)  //metodo get ha un solo parametro che è url, in modello restFul, restituisce un'observable => prevedono possibilità di averer più valori e viene gestito con subscribe() che sarebbe come iscriversi ad una nuova newsletter e stare in ascolto per tutte volte che viene rilasciata una nuova newsletter
    }

    searchCocktailByIngredient(ingredient: string) {
        const URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + ingredient;
        return this.httpClient.get(URL)  //metodo get ha un solo parametro che è url, in modello restFul, restituisce un'observable => prevedono possibilità di averer più valori e viene gestito con subscribe() che sarebbe come iscriversi ad una nuova newsletter e stare in ascolto per tutte volte che viene rilasciata una nuova newsletter
    }

    searchCocktailRandom() {
        const URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php' ;
        return this.httpClient.get(URL)  //metodo get ha un solo parametro che è url, in modello restFul, restituisce un'observable => prevedono possibilità di averer più valori e viene gestito con subscribe() che sarebbe come iscriversi ad una nuova newsletter e stare in ascolto per tutte volte che viene rilasciata una nuova newsletter
    }

    searchListIngredient(){
        return this.httpClient.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
    }
}