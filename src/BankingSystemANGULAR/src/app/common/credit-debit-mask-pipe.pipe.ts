import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditDebitMaskPipe'
})
export class CreditDebitMaskPipePipe implements PipeTransform {

  transform(cardNumber: string, visibleDigits: number): string {
    let firstVisibleNumbers = cardNumber.slice(0, visibleDigits);
    let maskedNumbers = cardNumber.slice(visibleDigits, -visibleDigits);   
    let lastVisibleNumbers = cardNumber.slice(-visibleDigits);   
    return firstVisibleNumbers + maskedNumbers.replace(/./g, '*') + lastVisibleNumbers;
  }

}
