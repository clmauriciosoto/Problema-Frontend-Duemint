import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'number',
})
export class NumberPipe implements PipeTransform {
  transform(value: string): string {
    if (value) {
      const array = value.split(' ');

      for (let index = 0; index <= 4; index++) {
        const element = array[index];
        if (element === undefined && array.length < 4) {
          array.push('####');
        } else {
          if (index === 1 || index === 2) {
            if (array[index] !== undefined) {
              array[index] = '*'.repeat(array[index].length);
            }
          }
        }
      }
      return array.join(' ');
    } else {
      return '#### #### #### ####';
    }
  }
}
