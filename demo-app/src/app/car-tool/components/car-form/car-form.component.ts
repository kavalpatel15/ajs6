import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Car } from '../../models/cars';

@Component({
  selector: 'car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  @Input()
  buttonText = 'Submit Car Form';

  @Output()
  submitCar = new EventEmitter<Car>();

  carForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.carForm = this.fb.group({
      make: '',
      model: '',
      year: 1900,
      color: '',
      price: 0,
    });
  }

  ngOnInit() {
  }

  doSubmitCar() {
    this.submitCar.emit({
      make: this.carForm.value.make,
      model: this.carForm.value.model,
      year: this.carForm.value.year,
      color: this.carForm.value.color,
      price: this.carForm.value.price,
    });
    this.carForm.reset();
  }

}
