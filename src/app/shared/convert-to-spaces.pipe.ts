import { Pipe, PipeTransform } from '@angular/core';

//Custom pipe - remember to registered in module which uses pipe
@Pipe({
   name: 'ConvertToSpaces',
})
export class ConvertToSpacesPipe implements PipeTransform {
   transform(value: string, delimiter: string) {
      return value.replace(delimiter, ' ');
   }
}
