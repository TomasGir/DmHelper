import {Component, OnInit} from '@angular/core';
import {Injectable} from '@angular/core';
import {Monster} from '../../services/monster_service/monster';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as Past from '../../state_management';

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

  post: Observable<Past.Post>;
  text: object;
  editState: boolean;

  constructor(
    private store: Store<Past.Post>) {
    this.post = this.store.select('post');
    this.editState = false;
  }

  navigate(dataObject) {
    this.send = dataObject;
  }

  setCategory(category) {
    this.searchTerm = category;
  }

  ngOnInit() {
    this.monsters$ = this.store.select(Past.getAllMonsters);
  }
}
