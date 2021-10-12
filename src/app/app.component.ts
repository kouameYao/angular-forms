import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-forms';
  nom= '';
  preNom= '';
  age : number = 0;
  asBody= true;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.nom= 'Kouame';
    this.preNom= 'Yao Jean Junior';
    this.age= 25;
  }
}
