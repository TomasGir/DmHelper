import {PipeTransform, Pipe} from '@angular/core';
import {Monster} from '../../services/monster_service/monster';

@Pipe({
  name: 'monsterFilter'
})

export class MonsterFilterPipe implements PipeTransform {
  transform(monsters: Monster[], searchTerm: String): Monster[] {
    if (!monsters || !searchTerm) {
      return monsters;
    }
    const nameFilter = monsters.filter(monster =>
      monster.type.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    const typeFilter = monsters.filter(monster =>
      monster.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    return uniqueArray(nameFilter.concat(typeFilter));
  }
}

const uniqueArray = function (arrArg) {
  const filteredArray = arrArg.filter(function (elem, pos, arr) {
    return arr.indexOf(elem) === pos;
  });

  return filteredArray.sort((n1, n2) => n1.index - n2.index);
};
