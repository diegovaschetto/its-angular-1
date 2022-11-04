import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/_service/api.service';

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
    selector: 'app-drinks',
    templateUrl: './drinks.component.html',
    styleUrls: ['./drinks.component.scss'],
})
class DrinksComponent implements OnInit  {
    constructor(private service: ApiService,
        private route: ActivatedRoute,
        private router:Router) {}
    ngOnInit(): void {
        this.router.navigate(["drinks/a"])
        this.route.paramMap.subscribe((param)=>{
            this.letterToSearch = param.get("letter") ?? this.letterToSearch
            this.searchCocktailByLetter() 
        })
    }

    letterToSearch = "a"
    drinks: Drink[] = [];
    idDrink = '';
    alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    selected = ""
    errorNotFound = false
    randomCocktail = false 

    searchCocktailByLetter = () => {
        this.randomCocktail = false
        this.drinks.length=0
            this.service.searchCocktailByFirstLetter(this.letterToSearch).subscribe((response: Partial<Drinks>) => {
                if (response.drinks) this.drinks = response.drinks;
                !response.drinks?.length? this.errorNotFound= true : this.errorNotFound=false
                
            });
    };

    searchCocktailRandom = () => {
        this.selected= ""
        this.randomCocktail = true
            this.service.searchCocktailRandom().subscribe((response: Partial<Drinks>) => {
                if (response.drinks) this.drinks = response.drinks;
            });
    };
}

export default DrinksComponent;
