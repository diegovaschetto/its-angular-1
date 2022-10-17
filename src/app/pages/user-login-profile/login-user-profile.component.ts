import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-login-user-profile',
  templateUrl: './login-user-profile.component.html',
})

export class LoginUserComponent {
  typeOfUser = "PF"

  reset=(form:NgForm)=> {
    form.form.markAsPristine()
    this.showError = false
  }
  submit = (form: NgForm) => {
    if(form.invalid){
      this.showError = true
    }
  }

  data = {
    PF: {
      gender:"FM",
      CF:"",
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

