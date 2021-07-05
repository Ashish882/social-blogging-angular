import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let firstChar = value.split("")[0];
    let AllOtherChar = value.split("")[1];

    let newValue = firstChar.toUpperCase() + 
    AllOtherChar.toLowerCase();
    return newValue;
  }

}
