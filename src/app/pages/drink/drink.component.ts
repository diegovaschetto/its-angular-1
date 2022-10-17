import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from '@angular/router';



@Component({
    selector:"app-drink",
    templateUrl:"./drink.component.html",
    styleUrls:["./drink.component.scss"]
})
class DrinkComponent implements OnInit {

    constructor(private route: ActivatedRoute ){
    }

    idDrink:any=""
    idDrink2:any=""
    ngOnInit(): void {
        this.idDrink = this.route.snapshot.paramMap.get("idDrink")
        console.log(this.route);


        this.route.paramMap.subscribe(params => {
            console.log(params)
          })
        
    }

    
    

}

export default DrinkComponent