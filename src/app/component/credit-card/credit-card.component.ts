import { Form } from './../../../assets/model/form';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css'],
})
export class CreditCardComponent implements OnInit {
  @Input() form: Form = new Form();
  @Input() active: boolean = false;

  constructor() {
    this.active = false;
  }

  ngOnInit(): void {}
}
