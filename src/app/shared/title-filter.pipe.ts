import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleFilter'
})
export class TitleFilterPipe implements PipeTransform {

  transform(value: any, input: any): any {
    if (input) {
      return value.filter(val => val.title.toLocaleLowerCase().match(input.toLocaleLowerCase()));
    } else {
      return value;
    }
  }
}
