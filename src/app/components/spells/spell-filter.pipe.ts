import {PipeTransform, Pipe} from '@angular/core';
import {Spells} from '../../services/spell_service/spells';

@Pipe({
  name: 'spellFilter'
})

export class SpellFilterPipe implements PipeTransform {
  transform(spells: Spells[], searchTerm: String): Spells[] {
    if (!spells || !searchTerm) {
      return spells;
    }

    spells.forEach(function (spell) {
      const classes: any = spell.classes;
      for (let i = 0; i < classes.length; i++) {
        if (searchTerm === classes[i].name) {
          console.log(spell.name);
        }
      }
    });
    const nameFilter = spells.filter(spell =>
      spell.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    const classFilter = spells.filter(spell => {
      const casterClasses: any = spell.classes;
      for (let i = 0; i < casterClasses.length; i++) {
        if (spell.classes[i].name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
          return spell;
        }
      }
    });
    return uniqueArray(nameFilter.concat(classFilter));
  }
}

const uniqueArray = function (arrArg) {
  return arrArg.filter(function (elem, pos, arr) {
    return arr.indexOf(elem) === pos;
  });
};
