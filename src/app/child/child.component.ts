import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() nom = '';
  @Input() preNom = '';
  @Input() age = 0;
  @Input() asBody= false

  @Output() newItemEvent = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

}
