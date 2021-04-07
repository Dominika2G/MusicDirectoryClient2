import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {

  transform(value: any, input: any): any {
    if (input) {
      return value.filter(val => val.releaseData.toLocaleLowerCase().match(input.toLocaleLowerCase()));
    } else {
      return value;
    }
  }

}
