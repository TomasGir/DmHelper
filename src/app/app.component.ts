import {Component, OnInit} from '@angular/core';
import * as  MonsterActions from './state_management/actions/monster.actions';
import * as  SpellActions from './state_management/actions/spell.actions';
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
  post2: Observable<Past.Post>;
  post1: Observable<Past.SpellModule>;

  constructor(
    private store: Store<Past.Post>,
    private stores: Store<Past.SpellModule>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new MonsterActions.LoadMonsterData());
    this.stores.dispatch(new SpellActions.LoadSpellData());
  }

}
