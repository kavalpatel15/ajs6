import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { CarHomeComponent } from './components/car-home/car-home.component';
import { CarTableComponent } from './components/car-table/car-table.component';
import { ViewCarRowComponent } from './components/view-car-row/view-car-row.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { EditCarRowComponent } from './components/edit-car-row/edit-car-row.component';

@NgModule({
  declarations: [CarHomeComponent, CarTableComponent, ViewCarRowComponent, CarFormComponent, EditCarRowComponent],
  imports: [
    CommonModule, ReactiveFormsModule, SharedModule,
  ],
  exports: [CarHomeComponent, CarTableComponent, ViewCarRowComponent],
})
export class CarToolModule { }
