import { Component, OnInit } from '@angular/core';
import { Color } from '../../models/color';

@Component({
  selector: 'color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  headerText = 'Kaval\'s Color Tool';

  colors = [
    { id: 1, name: 'blue', hexCode: '0000FF' },
    { id: 2, name: 'black', hexCode: '000000' },
    { id: 3, name: 'gray', hexCode: 'CCCCCC' },
    { id: 4, name: 'purple', hexCode: 'FF00FF' },
  ];

  constructor() {  }

  ngOnInit() {
  }
  

  addColor(color: Color) {
    this.colors = this.colors.concat({
      ...color,
      id: Math.max(...this.colors.map(c => c.id), 0) + 1,
    });
  }

}
