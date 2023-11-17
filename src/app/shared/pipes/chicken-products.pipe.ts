import { Pipe, PipeTransform } from '@angular/core';
import { ProductType } from 'src/types/product.type';

@Pipe({
  name: 'chickenProducts',
})
export class ChikenProductsPipe implements PipeTransform {
  transform(products: ProductType[]): ProductType[] {
    return products.filter((item) => item.title.toLowerCase().includes('кур'));
  }
}
