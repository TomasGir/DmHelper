import {Pipe, PipeTransform} from '@angular/core';
import {Monster} from '../services/monster_service/monster';

@Pipe({
  name: 'matchesCategory'
})
export class MonsterDetailFilterPipe implements PipeTransform {
  transform(monsters: Monster[], index: number): Monster[] {
    if (monsters) {
      return monsters.filter(monster => monster.index === index);
    }
  }
}
