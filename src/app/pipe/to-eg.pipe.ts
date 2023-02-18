import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toEg'
})
export class ToEgPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `${value} EGP`;
  }

}
