import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user : User = new User()
  public loginForm: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    sendCatalog: new FormControl(true),
  })
  constructor() { }

  ngOnInit(): void {
  }

  public saveData() {
    console.log("Hello");
    console.log(this.loginForm);
    console.log('Valeurs', JSON.stringify(this.loginForm.value));
    
    
  }

}
