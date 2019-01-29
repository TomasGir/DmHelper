import {Component, OnInit} from '@angular/core';
import {Injectable} from '@angular/core';
import {Spells} from '../../services/spell_service/spells';
import {SpellsService} from '../../services/spell_service/spells.service';
import {Sort} from '@angular/material';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss']
})

@Injectable()
export class SpellsComponent implements OnInit {

  spells: Spells[];
  sortedData: Spells[];
  searchTerm: string;
  send: object;

  constructor(private spellsService: SpellsService) {
  }

  getSpells(): void {
    this.spellsService.getSpells()
      .subscribe(spell => this.spells = this.sortedData = spell);
  }

  ngOnInit() {
    this.getSpells();
  }

  setCategory(category) {
    this.searchTerm = category;
  }

  sortData(sort: Sort) {
    const data = this.spells.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'school':
          return compare(a.school.name, b.school.name, isAsc);
        case 'level':
          return compare(a.level, b.level, isAsc);
        default:
          return 0;
      }
    });
  }

  navigate(thing) {
    this.send = {};
    this.send = this.spells[thing - 1];
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
