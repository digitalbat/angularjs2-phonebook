import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): '' {
    if(args){
      return value.filter((item)=> item.name.toUpperCase().includes(args.toUpperCase()));
    }else{
      return value;
    }

  }

}
