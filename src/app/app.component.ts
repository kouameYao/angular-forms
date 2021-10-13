import { Component } from '@angular/core';


export type EditorType = 'name' | 'profile';

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

  items = ['item1', 'item2', 'item3', 'item4'];

  constructor(){}

  ngOnInit(): void {
    this.nom= 'Kouame';
    this.preNom= 'Yao Jean Junior';
    this.age= 25;
  }

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  editor: EditorType = 'name';

  get showNameEditor() {
    return this.editor === 'name';
  }

  get showProfileEditor() {
    return this.editor === 'profile';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}
