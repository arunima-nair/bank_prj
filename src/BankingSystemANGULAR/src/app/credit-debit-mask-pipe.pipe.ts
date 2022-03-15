import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditDebitMaskPipe'
})
export class CreditDebitMaskPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
