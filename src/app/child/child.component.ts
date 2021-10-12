import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
