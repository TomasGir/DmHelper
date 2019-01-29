import {Component, OnInit} from '@angular/core';
import {Injectable} from '@angular/core';
import {Items} from '../../services/item_service/items';
import {ItemsService} from '../../services/item_service/items.service';
import {Sort} from '@angular/material';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})

@Injectable()
export class ItemsComponent implements OnInit {

  items: Items[];
  sortedData: Items[];
  searchTerm: string;
  send: object;

  constructor(private itemsService: ItemsService) {
  }

  getItems(): void {
    this.itemsService.getItems()
      .subscribe(item => this.items = this.sortedData = item);
  }

  ngOnInit() {
    this.getItems();
  }

  sortData(sort: Sort) {
    const data = this.items.slice();
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
  }

  navigate(thing) {
    this.send = {};
    this.send = this.items[thing - 1];
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
