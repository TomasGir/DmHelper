import {PipeTransform, Pipe} from '@angular/core';
import {Monster} from '../services/monster_service/monster';

@Pipe({
  name: 'monsterFilter'
})

export class MonsterFilterPipe implements PipeTransform {
  transform(monsters: Monster[], searchTerm: String): Monster[] {
    if (!monsters || !searchTerm) {
      return monsters;
    }
    return monsters.filter(monster =>
      monster.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }
}
