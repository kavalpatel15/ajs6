import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Car } from '../../models/cars';
@Component({
  selector: '.edit-car-row',
  templateUrl: './edit-car-row.component.html',
  styleUrls: ['./edit-car-row.component.css']
})
export class EditCarRowComponent implements OnInit {
  carForm: FormGroup;

  @Input()
  car: Car;

  @Output()
  saveCar = new EventEmitter<Car>();

  @Output()
  cancelCar = new EventEmitter<void>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.carForm = this.fb.group({
      make: this.car.make,
      model: this.car.model,
      year: this.car.year,
      color: this.car.color,
      price: this.car.price,
    });
  }

  doSaveCar() {
    this.saveCar.emit({ ...this.carForm.value, id: this.car.id, });
    this.carForm.reset();
  }

}
