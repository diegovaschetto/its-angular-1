import { Component, OnInit} from '@angular/core';
import { ApiService } from 'src/app/_service/api.service';


export interface Drink {
    idDrink: string;
    strDrinkThumb: string;
    strDrink: string;
    strAlcoholic: string;
    selected?:boolean
}


interface Drinks {
    drinks: Drink[];
}

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit  {
    constructor(private service: ApiService) {}

    drinks: Drink[] = [];
    cartDrinks: Drink[]= []
    isSearched = false

    jsonIn = {
        name:"",
    }
    
   
    ngOnInit(): void {
        
    }


    addToCart = (drink:Drink) => {
        if (drink.selected) {
            this.cartDrinks.push(drink)
        }else {
            this.cartDrinks.splice(this.cartDrinks.indexOf(drink),1)
        }
    }

    toggleDrink(drink:Drink) {
        if (this.cartDrinks.length === 5 ) return 
        drink.selected =! drink.selected        
        this.addToCart(drink)
    }

    searchCocktailByName = () => {
            this.service.searchCocktailByName(this.jsonIn.name).subscribe((response: Partial<Drinks>) => {
                if (response.drinks) {
                    this.drinks = response.drinks
                    this.drinks.forEach(drink=> {drink.strDrinkThumb = drink.strDrinkThumb+"/preview"; drink.selected=false})
                    this.isSearched= true
                    return
                };
                this.isSearched= true
               this.drinks = []
            });
    };

}
