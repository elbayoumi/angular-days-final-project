import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converter'
})
export class ConverterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `price : ${value} `;
  }

}
