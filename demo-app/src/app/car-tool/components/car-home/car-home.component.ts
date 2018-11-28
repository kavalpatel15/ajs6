import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/cars';

@Component({
  selector: 'car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  headerText = 'Kaval\'s Car Tool';

  tableInfo = ['Id', 'Make', 'Model', 'Year', 'Color', 'Price'];
  cars = [
    { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2017, color: 'black', price: 25000 },
    { id: 2, make: 'Tesla', model: 'Model S', year: 2018, color: 'red', price: 100000 },
  ];

  constructor() { }

  ngOnInit() {
  }

  addCar(car: Car) {
    this.cars = this.cars.concat({
      ...car,
      id: Math.max(...this.cars.map(c => c.id), 0) + 1,
    });
  }

  deleteCar(carId: number) {
    this.cars = this.cars.filter(c => c.id !== carId);
  }

}
