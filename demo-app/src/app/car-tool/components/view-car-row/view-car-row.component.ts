import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../models/cars';
@Component({
  selector: '[view-car-row]',
  templateUrl: './view-car-row.component.html',
  styleUrls: ['./view-car-row.component.css']
})
export class ViewCarRowComponent implements OnInit {

  @Input()
  car;

  @Output()
  deleteCar = new EventEmitter<number>();

  @Output()
  editable = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit() {
  }

  doDeleteCar() {
    this.deleteCar.emit(
      this.car.id
    );
  }

  isEditable() {
    this.editable.emit(
      this.car.id
    );
  }


}
