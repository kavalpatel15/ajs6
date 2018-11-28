import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {

  @Input()
  cars;

  @Output()
  deleteCar = new EventEmitter<number> ();
  constructor() { }

  editCarId = -1;

  ngOnInit() {
  }

  doDeleteCar(carId: number) {
    this.deleteCar.emit(carId);
  }
  doEditCar(carId: number) {
   this.editCarId = carId;
  }
  doCancelEdit(carId: number) {
    this.editCarId = carId;
  }

}
