import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor() {}

  getYearList() {
    const array = [];
    for (let index = 2018; index <= 2030; index++) {
      const str = index.toString().substring(2);

      array.push({
        value: str,
        label: index,
      });
    }
    return array;
  }

  getMonthList() {
    const array = [];
    for (let index = 1; index <= 12; index++) {
      const str = index.toString().length === 1 ? `0${index}` : index;
      array.push(str);
    }
    return array;
  }
}
