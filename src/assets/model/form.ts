export class Form {
  cardNumber: string;
  cardName: string;
  expirationYear: string;
  expirationMonth: string;
  cvv: string;
  constructor({
    cardNumber = '',
    cardName = '',
    expirationYear = '',
    expirationMonth = '',
    cvv = '',
  } = {}) {
    this.cardNumber = cardNumber;
    this.cardName = cardName;
    this.expirationYear = expirationYear;
    this.expirationMonth = expirationMonth;
    this.cvv = cvv;
  }
}
