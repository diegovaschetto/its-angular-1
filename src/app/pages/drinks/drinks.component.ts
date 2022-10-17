import { Component, OnInit } from "@angular/core"
import { HttpClient } from "@angular/common/http"

interface Drinks  {
    drinks:[]
}


@Component({
    selector:"app-drinks",
    templateUrl:"./drinks.component.html",
    styleUrls:["./drinks.component.scss"]
})
class DrinksComponent implements OnInit{

    constructor(private httpClient: HttpClient){
    }
    
    drinks:{idDrink:string}[] = []
    idDrink:string = ""

    ngOnInit (): void {
        const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
        this.httpClient
            .get(URL)
            .subscribe((response:Partial<Drinks>) =>
            {if(response.drinks)this.drinks=response.drinks})
    }


}

export default DrinksComponent