import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(val:any , searchTerm:any): any {
    return val.search(function(filter){
     return filter.Product.indexOf(searchTerm) > -1
    });
      
    
  }
}
