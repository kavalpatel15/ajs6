import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Color } from '../../models/color';

@Component({
  selector: 'color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit {

  @Input()
  buttonText = 'Submit Color Form';

  @Output()
  submitColor = new EventEmitter<Color>();

  colorForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.colorForm = this.fb.group({
      colorName: '',
      colorHexCode: '',
    });
  }

  ngOnInit() {
  }

  doSubmitColor() {
    this.submitColor.emit({
      name: this.colorForm.value.colorName,
      hexCode: this.colorForm.value.colorHexCode,
    });
    this.colorForm.reset();
  }
}
