import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user-profile',
  templateUrl: './login-user-profile.component.html',
})

export class LoginUserComponent {
  typeOfUser = "PF"

  data = {
    PF: {
      name: "",
      surname: "",
      differentAddress: false,
      typeOfStreet: "",
      nameOfStreet: "",
      numberOfStreet: "",
      CAP: "",
      local: "",
      city: "",
      province: "",
      state: ""
    },
    PG: {
      companyName: ""
    },

    typeOfStreet: "",
    nameOfStreet: "",
    numberOfStreet: "",
    CAP: "",
    local: "",
    city: "",
    province: "",
    state: "",
    email:"",
    FAX:"",
    number:""
  }

  showError= false

}

