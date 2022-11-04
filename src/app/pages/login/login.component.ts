import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
  })

export class LoginComponent {
  data= {
    username:'',
    password:'',
    rememberMe: false
  }

  showPassword = false;
  invalidForm = false;
  constructor(private readonly router: Router) { }
  submit(formIstance: NgForm){
   if (formIstance.form.valid) {
     console.log(formIstance.form.invalid);
     console.log(formIstance.valid);
     
    this.router.navigate(["drinks"])
   }
   else{
     this.invalidForm = true;
   }
  }
}

