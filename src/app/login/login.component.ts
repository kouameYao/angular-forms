import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user : User = new User()
  constructor() { }

  ngOnInit(): void {
  }

  public saveData(registerForm : NgForm) {
    console.log("Hello");
    console.log(registerForm.form);
    console.log('Valeurs', JSON.stringify(registerForm.value));
    
    
  }

}
