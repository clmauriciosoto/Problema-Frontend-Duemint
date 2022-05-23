import { CvvTransformPipe } from './pipe/cvv-transform.pipe';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditCardComponent } from './component/credit-card/credit-card.component';
import { FormComponent } from './component/form/form.component';
import { LogoPipe } from './pipe/logo.pipe';
import { NumberPipe } from './pipe/number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardComponent,
    FormComponent,
    CvvTransformPipe,
    LogoPipe,
    NumberPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
