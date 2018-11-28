import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUppercase'
})
export class MyUppercasePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (value == null || String(value).length === 0) {
      return '';
    }

    return String(value).toUpperCase();
  }

}
