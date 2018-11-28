import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[edit-car-row]',
  templateUrl: './edit-car-row.component.html',
  styleUrls: ['./edit-car-row.component.css']
})
export class EditCarRowComponent implements OnInit {

  @Input()
  car;

  constructor() { }

  ngOnInit() {
  }

}
