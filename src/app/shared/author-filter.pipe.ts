import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'authorFilter'
})
export class AuthorFilterPipe implements PipeTransform {

  transform(value: any, input: any): any {
    if (input) {
      return value.filter(val => val.author.toLocaleLowerCase().match(input.toLocaleLowerCase()));
    } else {
      return value;
    }
  }

}
