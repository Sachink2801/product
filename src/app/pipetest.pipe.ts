import { Pipe, PipeTransform } from '@angular/core';

 @Pipe({
  name: 'pipetest'
 })
 export class PipetestPipe implements PipeTransform {

   transform(value: number): number {
    return value.toString().length;
  }

 }
