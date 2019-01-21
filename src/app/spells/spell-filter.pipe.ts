import {PipeTransform, Pipe} from '@angular/core';
import {Spells} from '../services/spell_service/spells';

@Pipe({
  name: 'spellFilter'
})

export class SpellFilterPipe implements PipeTransform {
  transform(spells: Spells[], searchTerm: String): Spells[] {
    if (!spells || !searchTerm) {
      return spells;
    }
    return spells.filter(spell =>
      spell.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }
}
