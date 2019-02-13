import {Component, OnInit} from '@angular/core';
import {Injectable} from '@angular/core';
import {Items} from '../../services/item_service/items';
import {Sort} from '@angular/material';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as StateManager from '../../state_management';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})

@Injectable()
export class ItemsComponent implements OnInit {

  items$: Observable<Items[]>;
  sortedData: Items[];
  searchTerm: string;
  send: object;

  constructor(
    private store: Store<StateManager.ItemModule>
  ) {
  }

  getItems(): void {
    this.items$ = this.store.select(StateManager.getAllItems);
    this.items$.subscribe(val => this.sortedData = val);
  }

  ngOnInit() {
    this.getItems();
  }

  sortData(sort: Sort) {
    this.items$.subscribe( val => {
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
        case 'cost':
          return compare(a.cost.quantity, b.cost.quantity, isAsc);
        case 'type':
          return compare(a.equipment_category, b.equipment_category, isAsc);
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
