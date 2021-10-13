import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ChildComponent } from './child/child.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

@NgModule({
  declarations: [	
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ChildComponent,
    HeroFormComponent
   ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
