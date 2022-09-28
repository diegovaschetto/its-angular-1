import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter = 0;
  quantity = [0,0]
  
  increaseProduct = (product: number) =>{
    
    let secondP = document.getElementById("second-product") as HTMLInputElement 
    let firstP = document.getElementById("first-product") as HTMLInputElement 
    if (product) {
      secondP.value = `${parseInt(secondP.value)+1}`
      this.quantity[product]++
      return
    }
    firstP.value =`${parseInt(firstP.value)+1}`
    this.quantity[product]++
  }

  decreaseProduct = (product:number) =>{
    
    let secondP = document.getElementById("second-product") as HTMLInputElement 
    let firstP = document.getElementById("first-product") as HTMLInputElement 
    if (product) {
      if (this.quantity[product] === 0) return 
      secondP.value = `${parseInt(secondP.value)-1}`
      this.quantity[product]--
      return
    }
    if (this.quantity[product] === 0) return


    
    firstP.value = `${parseInt(firstP.value)-1}`
    this.quantity[product]--
  }

  showStep = (currentStep: number) =>{
    if (currentStep === this.counter) {
      return true;
    }
    return false;
  }

  endOrder =() => {
    alert("ok")
  }
  
  nextPage = () =>{
    this.counter++;
  }

  previousPage = () =>{
    this.counter--;
  }
}
