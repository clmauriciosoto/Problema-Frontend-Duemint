import { Form } from './../assets/model/form';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'front-duemint';
  form: Form = new Form();
  focus: boolean = false;

  getDataForm(form: Form) {
    this.form = form;
  }
}
