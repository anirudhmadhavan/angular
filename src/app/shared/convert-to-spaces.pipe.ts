import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'ConvertToSpaces',
})
export class ConvertToSpacesPipe implements PipeTransform {
   transform(value: string, delimiter: string) {
      return value.replace(delimiter, ' ');
   }
}
