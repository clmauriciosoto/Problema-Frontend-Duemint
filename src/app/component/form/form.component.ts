import { FormService } from './form.service';
import { Form } from './../../../assets/model/form';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form: Form;
  yearList: any[] = [];
  monthList: any[] = [];
  @Output() formSubmit = new EventEmitter<Form>();
  @Output() focus = new EventEmitter<boolean>();
  constructor(private formService: FormService) {
    this.form = new Form();
  }

  ngOnInit(): void {
    this.yearList = this.formService.getYearList();
    this.monthList = this.formService.getMonthList();
  }
  formatCardNumber(e: any) {
    let str = e.target.value;

    //elimina espacios en blanco

    const format = str
      .replace(/\s/g, '')
      .replace(/\D/g, '')
      .replace(/([0-9]{4})/g, '$1 ')
      .trim();
    this.form.cardNumber = format;
    this.formSubmit.emit(this.form);
  }
  formatCardName(e: any) {
    let str = e.target.value;
    //eliminar numeros y caracteres
    const format = str.replace(/[^a-zA-Z ]/g, '');

    this.form.cardName = format;
    this.formSubmit.emit(this.form);
  }

  formatCvv(e: any) {
    let str = e.target.value;
    const format = str.replace(/\s/g, '').replace(/\D/g, '').trim();
    this.form.cvv = format;
    this.formSubmit.emit(this.form);
  }
  changeMonth() {
    this.formSubmit.emit(this.form);
  }
  changeYear() {
    this.formSubmit.emit(this.form);
  }

  focusCvv(state: boolean) {
    this.focus.emit(state);
  }
}
