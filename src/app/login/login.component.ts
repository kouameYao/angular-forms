import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { User } from './user';

function ratingRangeValidator(min : number, max : number) : ValidatorFn {

  return (c : AbstractControl) : {[key : string] : boolean} | null => {
    // !! => c.value !== null
    if ((!!c.value && (isNaN(c.value)) || c.value < min || c.value > max)) {
      return {'rangeError' : true}
    }
    return null
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb : FormBuilder) { }

  public loginForm : FormGroup = new FormGroup({});
  public user : User = new User()

  ngOnInit(): void {
    this.user
    this.loginForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['',[Validators.required, Validators.maxLength(20)]],
      emailGroup: this.fb.group({
        email: ['',[Validators.required, Validators.email]],
        confirmEmail: ['', Validators.required],
      }),
      phone : '',
      rating: [null, ratingRangeValidator(1, 5)],
      notification : 'email',
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

  public setNotificationSetting(method : string) : void {
    const phoneControl = this.loginForm.get('phone');
    if (method === 'text') {
      phoneControl?.setValidators(Validators.required);
    } else {
      phoneControl?.clearValidators();
    }

    phoneControl?.updateValueAndValidity();
  }

}
