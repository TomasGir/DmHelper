import {PipeTransform, Pipe} from '@angular/core';
import {Items} from '../../services/item_service/items';

@Pipe({
  name: 'itemFilter'
})

export class ItemFilterPipe implements PipeTransform {
  transform(items: Items[], searchTerm: String): Items[] {
    if (!items || !searchTerm) {
      return items;
    }
    const nameFilter = items.filter(item =>
      item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    const categoryFilter = items.filter(item =>
      item.equipment_category.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    return uniqueArray(nameFilter.concat(categoryFilter));
  }
}

const uniqueArray = function (arrArg) {
  return arrArg.filter(function (elem, pos, arr) {
    return arr.indexOf(elem) === pos;
  });
};
