import {Component, OnInit} from '@angular/core';
import * as  MonsterActions from './state_management/actions/monster.actions';
import * as  SpellActions from './state_management/actions/spell.actions';
import * as  ItemActions from './state_management/actions/item.action';
import * as Past from './state_management';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dmhelper';
  post2: Observable<Past.MonsterModel>;
  post1: Observable<Past.SpellModule>;
  itemObs: Observable<Past.ItemModule>;

  constructor(
    private store: Store<Past.MonsterModel>,
    private stores: Store<Past.SpellModule>,
    private itemStore: Store<Past.ItemModule>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new MonsterActions.LoadMonsterData());
    this.stores.dispatch(new SpellActions.LoadSpellData());
    this.itemStore.dispatch(new ItemActions.LoadItemData());
  }

}
