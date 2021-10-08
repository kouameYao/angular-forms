import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb : FormBuilder) { }

  public loginForm : any;
  public user : User = new User()

  ngOnInit(): void {
    this.user
    this.loginForm = this.fb.group({
      firstName: '',
      lastName: {value : '', disabled : true},
      email: '',
      sendCatalog: false,
    })
  }

  public saveData() {
    console.log("Hello");
    console.log(this.loginForm);
    console.log('Valeurs', JSON.stringify(this.loginForm.value));
  }

  public fillFormData() : void {
    this.loginForm.patchValue({
      firstName : 'Yao',
      lastName : 'Jean',
      email : 'yaojean@test.com',
      sendCatalog : true,
    })
  }

}
