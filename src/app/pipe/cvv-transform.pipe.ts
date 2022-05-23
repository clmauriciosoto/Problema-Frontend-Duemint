import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cvv',
})
export class CvvTransformPipe implements PipeTransform {
  transform(value: any): unknown {
    return '*'.repeat(value.length);
  }
}
