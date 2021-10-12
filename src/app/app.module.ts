import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [	
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ChildComponent
   ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    //FormsModule : This is used for Template Form method
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
