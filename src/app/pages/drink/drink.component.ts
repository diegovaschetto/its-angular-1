import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";

interface DrinkApi {
    drinks:[]
}

@Component({
    selector:"app-drink",
    templateUrl:"./drink.component.html",
    styleUrls:["./drink.component.scss"]
})
class DrinkComponent implements OnInit {

    constructor(private http:HttpClient, private route: ActivatedRoute ){
    }

    idDrink:any=""
    drink:DrinkApi = {drinks:[]}
    
    ngOnInit(): void {
        const urlRoot= "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
        this.route.paramMap.subscribe(params => {
            this.idDrink = params.get('idDrink')
          })

        this.http
            .get(urlRoot+this.idDrink)
            .subscribe((response:Partial<DrinkApi>) => {
                console.log(response)
            })
        
    }

    
    

}

export default DrinkComponent