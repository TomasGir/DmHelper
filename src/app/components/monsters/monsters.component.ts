import {Component, OnInit, Injectable} from '@angular/core';
import {Monster} from '../../services/monster_service/monster';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as State from '../../state_management';
import * as CombatActions from '../../state_management/actions/combat.action';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.scss']
})

@Injectable()
export class MonstersComponent implements OnInit {
  monsters: Monster[];
  monsters$: Observable<Monster[]>;
  searchTerm: string;
  send: object;

  text: object;
  editState: boolean;

  constructor(
    private store: Store<State.MonsterModel>) {
    this.editState = false;
  }

  navigate(dataObject) {
    this.send = dataObject;
  }

  setCategory(category) {
    this.searchTerm = category;
  }

  addCombatant(name) {
    this.store.dispatch(new CombatActions.AddTutorial(name));
  }

  ngOnInit() {
    this.monsters$ = this.store.select(State.getAllMonsters);
  }
}
