import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/cars';

@Component({
  selector: 'car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  cars: Car[] = [
    { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2017, color: 'black', price: 25000 },
    { id: 2, make: 'Tesla', model: 'Model S', year: 2018, color: 'red', price: 100000 },
  ];

  editCarId = -1;

  ngOnInit() {
  }

  doAddCar(car: Car) {
    this.cars = this.cars.concat({
      ...car,
      id: Math.max(...this.cars.map(c => c.id)) + 1,
    });
    this.editCarId = -1;
  }


  doEditCar(carId: number) {
    this.editCarId = carId;
  }

  doCancelCar() {
    this.editCarId = -1;
  }

  doReplaceCar(car: Car) {
    const newCars = this.cars.concat();
    newCars[newCars.findIndex(c => c.id === car.id)] = car;
    this.cars = newCars;
    this.editCarId = -1;
  }

  doDeleteCar(carId: number) {
    this.cars = this.cars.filter(c => c.id !== carId);
    this.editCarId = -1;
  }

}
