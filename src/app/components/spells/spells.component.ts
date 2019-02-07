import {Component, OnInit} from '@angular/core';
import {Injectable} from '@angular/core';
import {Spells} from '../../services/spell_service/spells';
import {Sort} from '@angular/material';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as Past from '../../state_management';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss']
})

@Injectable()
export class SpellsComponent implements OnInit {

  spells: Spells[];
  spells$: Observable<Spells[]>;
  sortedData: Spells[];
  searchTerm: string;
  send: object;
  something: any;

  constructor(
    private store: Store<Past.Post>) {
  }

  ngOnInit() {
    this.spells$ = this.store.select(Past.getAllSpells);
    this.spells$.subscribe(val => this.sortedData = val);
  }

  setCategory(category) {
    this.searchTerm = category;
  }

  sortData(sort: Sort) {
    this.spells$.subscribe(val => {
      const data = val.slice();
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
    });
  }

  navigate(thing) {
    this.send = {};
    this.send = thing;
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
