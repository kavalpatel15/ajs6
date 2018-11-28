import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Car } from '../../models/cars';
@Component({
  selector: '[edit-car-row]',
  templateUrl: './edit-car-row.component.html',
  styleUrls: ['./edit-car-row.component.css']
})
export class EditCarRowComponent implements OnInit {

  @Input()
  car: Car;

  @Output()
  cancelEditCar = new EventEmitter<number>();

  @Output()
  saveEditCar = new EventEmitter<Car>();


  carForm = this.fb.group({
    make: this.car.make,
    model: this.car.model,
    year: this.car.year,
    color: this.car.color,
    price: this.car.price,
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  doCancelEditCar() {
    this.cancelEditCar.emit(
      -1
    );
  }

  doSaveEditCar() {
    this.saveEditCar.emit(

    );
    this.cancelEditCar.emit(
      -1
    );
  }
}

