import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'logo',
})
export class LogoPipe implements PipeTransform {
  transform(value: string): any {
    const visa = '../../../../assets/img/logo/visa.png';
    const discover = '../../../../assets/img/logo/discover.png';
    const american = '../../../../assets/img/logo/american.png';
    const mastercard = '../../../../assets/img/logo/mastercard.png';

    if (value.charAt(0) == '3') {
      return american;
    }
    if (value.charAt(0) == '5') {
      return mastercard;
    } else if (value.charAt(0) == '6') {
      return discover;
    } else {
      return visa;
    }
  }
}
