import {PipeTransform, Pipe} from '@angular/core';
import {Items} from '../services/item_service/items';

@Pipe({
  name: 'itemFilter'
})

export class ItemFilterPipe implements PipeTransform {
  transform(items: Items[], searchTerm: String): Items[] {
    if (!items || !searchTerm) {
      return items;
    }
    return items.filter(item =>
      item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }
}
